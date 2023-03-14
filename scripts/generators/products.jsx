import { faker } from "@faker-js/faker";

export const buildProductList = (size) => {
  const result = [];

  for (let i = 0; i < size; i++) {
    result.push({
      id: i + 1,
      image: faker.image.avatar(),
      title: faker.commerce.productName(),
      slang: faker.lorem.slug(),
      sumary: faker.commerce.productDescription(),
    });
  }

  console.log(JSON.stringify(result));
  return result;
};
