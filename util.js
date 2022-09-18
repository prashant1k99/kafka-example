import { faker } from "@faker-js/faker"

export const generateRandomUser = () => {
  return {
    id: faker.database.mongodbObjectId(),
    fullName: faker.helpers.fake('{{name.firstName}} {{name.lastName}}'),
    email: faker.internet.email(),
    phone: faker.phone.number()
  }
}