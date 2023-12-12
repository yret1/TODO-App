

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
        filter.classList.add('filter');
        filter.textContent = filterOptions[i];
        filterList.appendChild(filter);

        if (filter.textContent === "All Tasks"){
            filter.id = "all";
        }else if (filter.textContent === "Work"){
            filter.id = "work";
        }else if (filter.textContent === "Social"){
            filter.id = "social";
        }else if (filter.textContent === "Health"){
            filter.id = "health";
        }else if (filter.textContent === "Finance"){
            filter.id = "finance";
        }


    }




}


export default menu;