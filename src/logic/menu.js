

const menu = () => {

    const navWrapper = document.querySelector('.nav-wrapper');

    const header = document.createElement('h2');
    header.classList.add('header');
    header.textContent = "My TODO List";
    navWrapper.appendChild(header);


    const filterList = document.createElement('ul');
    filterList.classList.add('filter-list');
    navWrapper.appendChild(filterList);


    const filterOptions = ["Work", "Social", "Health", "Finance", "All Tasks"];


    for (let i = 0; i < filterOptions.length; i++) {

        let filter = document.createElement('li');
        let filterText = document.createElement('p');
        let filterIcon = document.createElement('div');
        filter.classList.add('filter');
        filterText.textContent = filterOptions[i];
        filterList.appendChild(filter);
        filter.appendChild(filterText);
        filter.appendChild(filterIcon);

        if (filterText.textContent === "All Tasks"){
            filter.id = "all";
        }else if (filterText.textContent === "Work"){
            filter.id = "work";
        }else if (filterText.textContent === "Social"){
            filter.id = "social";
        }else if (filterText.textContent === "Health"){
            filter.id = "health";
        }else if (filterText.textContent === "Finance"){
            filter.id = "finance";
        }


    }


    const addTask = document.createElement('button');
    addTask.classList.add('add-task');
    addTask.textContent = "Add Task";
    navWrapper.appendChild(addTask);



}

export default menu;