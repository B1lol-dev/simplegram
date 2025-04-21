export const NotFound = () => {
  return /*html*/ `
    <div class="h-[100vh] w-full flex justify-center items-center flex-col dark:bg-sg-black">
      <h1 class="text-7xl font-bold dark:text-sg-white">404</h1>
      <p class="text-sg-gray">the page you looking for is not found :(</p>
      <a href="/"><button type="button" class="bg-sg-aqua p-2 text-sg-white mt-3 rounded-lg">Go to Home</button></a>
    </div>
    `;
};
