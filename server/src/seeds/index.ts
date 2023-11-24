import { faker } from '@faker-js/faker'

export const generateTasks = (num: number) => {
  const tasks = []

  for (let i = 0; i < num; i++) {
    const title = faker.lorem.sentences(1)
    const description = faker.lorem.sentences(1)

    tasks.push({
      title,
      description,
    })
  }

  return tasks
}
