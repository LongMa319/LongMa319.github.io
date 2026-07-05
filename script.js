/*
标签切换函数 openTab()
    
参数说明：
event   = 当前被点击的按钮
tabName = 要显示的内容区域 id

工作逻辑：
1. 找到所有 .tab-content，把它们隐藏
2. 找到所有 .tab-button，取消 active 样式
3. 显示当前点击标签对应的内容
4. 给当前点击的标签加上 active 样式
*/
function openTab(event, tabName) {
    const contents = document.querySelectorAll(".tab-content");
    const buttons = document.querySelectorAll(".tab-button");

    contents.forEach(content => content.classList.remove("active"));
    buttons.forEach(button => button.classList.remove("active"));

    document.getElementById(tabName).classList.add("active");
    event.currentTarget.classList.add("active");
}