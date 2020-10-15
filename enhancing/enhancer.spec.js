const { TestScheduler } = require('jest');
const enhancer = require('./enhancer.js');
// test away!

test('repair item', () => {
    const item = {
        name: 'Great Scythe',
        durability: 45,
        enhancements: 0
    }

    const repairItem = enhancer.repair(item);

    expect(repairItem.durability).toBe(100)
});

test('successfully enhance weapon.', () => {
    const item = {
        name: 'Great Scythe',
        durability: 45,
        enhancements: 0
    }

    const enhanceItem = enhancer.success(item);

    expect(enhanceItem.enhancements).toBe(item.enhancements + 1);
});

test('return same value at success max enhancement', () => {
    const item = {
        name: 'Great Scythe',
        durability: 45,
        enhancements: 20
    }

    const enhanceItem = enhancer.success(item);

    expect(enhanceItem.enhancements).toBe(20);
});

test('fail enhance weapon at 0', () => {
    const item = {
        name: 'Great Scythe',
        durability: 45,
        enhancements: 0
    }

    const unhanceItem = enhancer.fail(item);
    
    expect(unhanceItem.enhancements).toBe(0);
});

test('change name if item is enhanced', () => {
    const items = [
        {
            name: 'Zweihander',
            durability: 100,
            enhancements: 20
        },
        {
            name: 'Great Scythe',
            durability: 45,
            enhancements: 0
        }
    ];

    const plusWeapon = enhancer.get(items[0]);
    const normalWeapon = enhancer.get(items[1]);

    expect(plusWeapon.name).toMatch(/\d+/);
    expect(normalWeapon.name).not.toMatch(/\d+/);
});