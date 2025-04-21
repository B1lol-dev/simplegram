export const MsgAnother = (text) => {
  const date = new Date();

  return /*html*/ `
      <div class="bg-sg-aqua flex flex-col px-3 py-2 rounded-[1rem_1rem_1rem_0] mt-4 shadow">
          <p class="text-xl text-sg-white">${text}</p>
          <span class="text-xs ml-auto text-sg-lightgray">${date.getHours()}:${date.getMinutes()}</span>
      </div>
    `;
};
