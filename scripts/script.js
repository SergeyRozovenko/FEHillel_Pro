window.onload = function() {
    const body = document.querySelector('body');

    setTimeout(() => {
        const fragment = document.createDocumentFragment();
        fragment.prepend(createTable(10, 10));
        body.prepend(fragment);
    }, 2000);
};

//-------------------------------------------------------------------

const settingsTag = {
    add_classList(classList) {
        this.classList.add(classList);
    },

    add_innerHTML(innerHTML) {
        this.innerHTML += innerHTML;
    },

    add_attributes(attributes) {
        const attributesList = Object.keys(attributes);

        if (attributesList.length) {
            attributesList.forEach(attribute => {
                this.setAttribute(attribute, attributes[attribute]);
            });
        };
    },
};

//-------------------------------------------------------------------

function createElement(nameTag) {
    return function(tagInfo) {
        const newElement = document.createElement(nameTag);

        if (tagInfo) {
            configureTag(newElement, 'add', tagInfo);
        };

        return newElement;
    };
};

const newTable = createElement('table');
const newRow = createElement('tr');
const newCell = createElement('td');

//-------------------------------------------------------------------

function configureTag(element, settingsType, elementInfo) {
    const propertiesList = Object.keys(elementInfo).filter(key => {
        return elementInfo[key] && settingsTag[`${settingsType}_${key}`];
    });
    
    if (propertiesList.length) {
        propertiesList.forEach(property => {
            settingsTag[`${settingsType}_${property}`].call(element, elementInfo[property]);
        });
    };
};

//-------------------------------------------------------------------

function createTable(numberRow, numberColumn) {
    const table = newTable();

    for(let i = 1; i <= numberRow; i++) {
        table.append(createRow(numberColumn));
    };

    return table;
};

function createRow(numberCell, cellInnerHTML) {
    const row = newRow();

    for (let i = 1; i <= numberCell; i++) {
        row.append(cell());
    };

    return row;
};

function createCell() {
    let count = 1;
    return function() {
        return newCell({innerHTML: count++})
    }
}

const cell = createCell();