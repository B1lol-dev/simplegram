export const AlertWarn = (text) => {
  return /*html*/ `
    <div class="absolute top-2 left-[50%] -translate-x-[50%] p-3 text-white rounded-lg cursor-pointer bg-orange-500" onclick="this.remove()">
        <h1 class="font-bold">${text}</h1>
    </div>
      `;
};
