import { healthSort } from "../index.js"

test('SortHealth', () => {
    const arr = [
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
    ];
    const arrSort = [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
    ];

    expect(healthSort(arr)).toEqual(arrSort);
});