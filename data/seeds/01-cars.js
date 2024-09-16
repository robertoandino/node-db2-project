// STRETCH
const cars = [
    {
        vin: '1HGCM82633A123456',
        make: 'toyota',
        model: 'prius',
        mileage: 215000,
        title: 'clean',
        transmission: 'manual',
    },
    {
        vin: '1HGCM82633A123457',
        make: 'toyota',
        model: 'corolla',
        mileage: 115000,
        title: 'salvage',
    },
    {
        vin: '1HGCM82633A123458',
        make: 'ford',
        model: 'focus',
        mileage: 15000,
        title: 'clean',
    },
]

/*exports.seed = function(knex) {
    return knex('cars')
     .truncate().then(() => {
        return knex('cars').insert(cars)
     })
}*/

exports.seed = async function (knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}