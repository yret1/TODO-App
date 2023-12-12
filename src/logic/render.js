let body = document.querySelector('body');






const render = () => {

    let main = document.createElement('main');
    main.classList.add('main');
    body.appendChild(main);


    let wrapper = document.createElement("section");
    wrapper.classList.add('todo-wrapper');
    main.appendChild(wrapper);
    wrapper.style.display = "grid";

    let navWrapper = document.createElement("section");
    navWrapper.classList.add('nav-wrapper');
    wrapper.appendChild(navWrapper);

    let taskWrapper = document.createElement("section");
    taskWrapper.classList.add('task-wrapper');
    wrapper.appendChild(taskWrapper);



}

export default render;