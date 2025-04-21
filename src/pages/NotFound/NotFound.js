export const NotFound = () => {
  return /*html*/ `
    <div class="h-[100vh] w-full flex justify-center items-center flex-col dark:bg-hg-black">
      <h1 class="text-7xl font-bold dark:text-hg-white">404</h1>
      <p class="text-hg-gray">the page you looking for is not found :(</p>
      <a href="/"><button type="button" class="bg-hg-aqua p-2 text-hg-white mt-3 rounded-lg">Go to Home</button></a>
    </div>
    `;
};
