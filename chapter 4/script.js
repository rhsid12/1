// Bootstrap 웹사이트를 이용한 디자인을 적용하려면 HTML에 Bootstrap CSS 링크가 필요합니다.
// 이 JavaScript 영역에서는 Bootstrap 관련 변수를 선언하거나 활용 코드를 넣을 수 있습니다.
// 예시: Bootstrap의 알림(alert)을 띄우기 위한 변수 선언
let bootstrapAlertMsg = "이것은 Bootstrap 디자인 예시입니다.";
let name = "도레미"

function sayhi() {
    console.log("안녕하세요, ");
}
sayhi();


// 할 일 목록의 각 항목을 클릭하면 지우는 선을 그어주는 함수
document.addEventListener("DOMContentLoaded", function() {
    const ol = document.querySelector('#todo_list');
    const addBtn = document.querySelector('#add_btn');
    const todoInput = document.querySelector('#todo_input');

    function decorateTodoItem(li, text) {
        li.textContent = "";
        li.classList.add("todo-item");

        const textSpan = document.createElement("span");
        textSpan.className = "todo-text";
        textSpan.textContent = text;

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "btn btn-outline-danger btn-sm todo-delete-btn";
        deleteBtn.type = "button";
        deleteBtn.textContent = "삭제";

        li.appendChild(textSpan);
        li.appendChild(deleteBtn);
    }

    function addTodoItem() {
        if (!ol || !todoInput) return;

        const todoText = todoInput.value.trim();
        if (todoText === "") return;

        const li = document.createElement('li');
        li.className = "list-group-item";
        decorateTodoItem(li, todoText);
        ol.appendChild(li);
        todoInput.value = "";
        todoInput.focus();
    }

    if (ol) {
        const existingItems = ol.querySelectorAll("li");
        existingItems.forEach(function(item) {
            const text = item.textContent ? item.textContent.trim() : "";
            if (text !== "") {
                decorateTodoItem(item, text);
            }
        });

        ol.addEventListener('click', function(e) {
            const deleteBtn = e.target.closest(".todo-delete-btn");
            if (deleteBtn) {
                const listItem = deleteBtn.closest("li");
                if (listItem) {
                    listItem.remove();
                }
            }
        });

        ol.addEventListener("mouseover", function(e) {
            const listItem = e.target.closest("li");
            if (listItem && ol.contains(listItem)) {
                listItem.classList.add("todo-hovered");
            }
        });

        ol.addEventListener("mouseout", function(e) {
            const listItem = e.target.closest("li");
            if (listItem && ol.contains(listItem)) {
                listItem.classList.remove("todo-hovered");
            }
        });
    }

    if (addBtn) {
        addBtn.addEventListener('click', addTodoItem);
    }

    if (todoInput) {
        todoInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                addTodoItem();
            }
        });
    }
});