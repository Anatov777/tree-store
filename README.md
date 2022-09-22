﻿# Задача
Есть массив объектов, которые имеют поля id и parent, через которые их можно связать в дерево и некоторые произвольные поля. id может быть как числом, так и строкой.
 
НУЖНО написать класс, который принимает в конструктор массив этих объектов и реализует следующие методы:
- getAll(). Должен возвращать изначальный массив элементов.
- getItem(id). Принимает id элемента и возвращает сам объект элемента.
- getChildren(id). Принимает id элемента и возвращает массив элементов, являющихся дочерними для того элемента, чей id получен в аргументе. Если у элемента нет дочерних, то должен возвращаться пустой массив.
- getAllChildren(id). Принимает id элемента и возвращает массив элементов, являющихся прямыми дочерними элементами того, чей id получен в аргументе + если у них в свою очередь есть еще дочерние элементы, они все тоже будут включены в результат, и так до самого глубокого уровня.
- getAllParents(id). Принимает id элемента и возвращает массив из цепочки родительских элементов, начиная от самого элемента, чей id был передан в аргументе и до корневого элемента, т.е. должен получиться путь элемента наверх дерева через цепочку родителей к корню дерева. В результате getAllParents ПОРЯДОК ЭЛЕМЕНТОВ ВАЖЕН!

ИСХОДНЫЕ ДАННЫЕ:
class TreeStore {}

const items = [
    { id: 1, parent: 'root' },
    { id: 2, parent: 1, type: 'test' },
    { id: 3, parent: 1, type: 'test' },

    { id: 4, parent: 2, type: 'test' },
    { id: 5, parent: 2, type: 'test' },
    { id: 6, parent: 2, type: 'test' },

    { id: 7, parent: 4, type: null },
    { id: 8, parent: 4, type: null },
];
const ts = new TreeStore(items);


 Примеры использования:
- ts.getAll() // [{"id":1,"parent":"root"},{"id":2,"parent":1,"type":"test"},{"id":3,"parent":1,"type":"test"},{"id":4,"parent":2,"type":"test"},{"id":5,"parent":2,"type":"test"},{"id":6,"parent":2,"type":"test"},{"id":7,"parent":4,"type":null},{"id":8,"parent":4,"type":null}]
- ts.getItem(7) // {"id":7,"parent":4,"type":null}
- ts.getChildren(4) // [{"id":7,"parent":4,"type":null},{"id":8,"parent":4,"type":null}]
- ts.getChildren(5) // []
- ts.getChildren(2) // [{"id":4,"parent":2,"type":"test"},{"id":5,"parent":2,"type":"test"},{"id":6,"parent":2,"type":"test"}]
- ts.getAllChildren(2) // [{"id":4,"parent":2,"type":"test"},{"id":5,"parent":2,"type":"test"},{"id":6,"parent":2,"type":"test"},{"id":7,"parent":4,"type":null},{"id":8,"parent":4,"type":null}]
- ts.getAllParents(7) // [{"id":4,"parent":2,"type":"test"},{"id":2,"parent":1,"type":"test"},{"id":1,"parent":"root"}]
