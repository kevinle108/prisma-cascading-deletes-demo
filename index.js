const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  // RESTRICT
  // const userWithPost = await prisma.user.create({
  //   data: {
  //     name: 'Alice',
  //     Post: {
  //       create: { title: 'Hello World'},
  //     },
  //   },
  // })

  // try {
  //   const deletedUser = await prisma.user.delete({
  //     where: { id: userWithPost.id }
  //   })
  // } catch (e) {
  //   console.log(e)
  // }

  // CASCADE
  // const userWithPost = await prisma.anotherUser.create({
  //   data: {
  //     name: 'Alice',
  //     AnotherPost: {
  //       create: { title: 'Hello World'}
  //     }
  //   }
  // })

  // const allUsers1 = await prisma.anotherUser.findMany()
  // const allPosts1 = await prisma.anotherPost.findMany()
  
  // console.log(
  //   `Before deleting the \`AnotherUser\` record there are ${allUsers1.length} and ${allPosts1.length} posts.`
  // )
  
  // const deletedUser = await prisma.anotherUser.delete({
  //   where: { id: userWithPost.id},
  // })
  
  // const allUsers2 = await prisma.anotherUser.findMany()
  // const allPosts2 = await prisma.anotherPost.findMany()
  
  // console.log(
  //   `After deleting the \`AnotherUser\` record there are ${allUsers2.length} and ${allPosts2.length} posts.`
  // )
  
  // NO ACTION
  // const userWithPost = await prisma.oneMoreUser.create({
  //   data: {
  //     name: 'Alice',
  //     OneMorePost: {
  //       create: { title: 'Hello World' },
  //     },
  //   },
  // })

  // try {
  //   const deletedUser = await prisma.oneMoreUser.delete({
  //     where: { id: userWithPost.id },
  //   })
  // } catch (e) {
  //   console.log(e)
  // }

  // SET NULL
  // const userWithPost = await prisma.almostTheLastUser.create({
  //   data: {
  //     name: 'Alice',
  //     AlmostTheLastPost: {
  //       create: { title: 'Hello World' },
  //     },
  //   },
  //   include: {
  //     AlmostTheLastPost: true,
  //   },
  // })

  // const postBefore = await prisma.almostTheLastPost.findUnique({
  //   where: { id: userWithPost.AlmostTheLastPost[0].id },
  //   include: { AlmostTheLastUser: true },
  // })

  // console.log(
  //   `Before deleting the \`AlmostTheLastUser\` record, the \`AlmostTheLastPost\` record looks as follows:\n${JSON.stringify(
  //     postBefore
  //   )}`
  // )

  // const deletedUser = await prisma.almostTheLastUser.delete({
  //   where: { id: userWithPost.id },
  // })

  // const postAfter = await prisma.almostTheLastPost.findUnique({
  //   where: { id: postBefore.id },
  //   include: { AlmostTheLastUser: true },
  // })

  // console.log(
  //   `After deleting the \`AlmostTheLastUser\` record, the \`AlmostTheLastPost\` record looks as follows:\n${JSON.stringify(
  //     postAfter
  //   )}`
  // )

  // SET DEFAULT
  // const userWithPost = await prisma.theLastUser.create({
  //   data: {
  //     name: 'Alice',
  //     TheLastPost: {
  //       create: { title: 'Hello World' },
  //     },
  //   },
  //   include: {
  //     TheLastPost: true,
  //   },
  // })

  // const user42WithPost = await prisma.theLastUser.create({
  //   data: {
  //     id: 42,
  //     name: 'Alice2',
  //     TheLastPost: {
  //       create: { title: 'Hello2 World2' },
  //     },
  //   },
  //   include: {
  //     TheLastPost: true,
  //   },
  // })

  // const postBefore = await prisma.theLastPost.findUnique({
  //   where: { id: userWithPost.TheLastPost[0].id },
  //   include: { TheLastUser: true },
  // })

  // console.log(
  //   `Before deleting the \`TheLastUser\` record, the \`TheLastPost\` record looks as follows:\n${JSON.stringify(
  //     postBefore
  //   )}`
  // )

  // const deletedUser = await prisma.theLastUser.delete({
  //   where: { id: userWithPost.id },
  // })

  // const postAfter = await prisma.theLastPost.findUnique({
  //   where: { id: postBefore.id },
  //   include: { TheLastUser: true },
  // })

  // console.log(
  //   `After deleting the \`TheLastUser\` record, the \`TheLastPost\` record looks as follows:\n${JSON.stringify(
  //     postAfter
  //   )}`
  // )
}

main()