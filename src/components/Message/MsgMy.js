export const MsgMy = (text) => {
  const date = new Date();

  return /*html*/ `
    <div class="bg-sg-white ml-auto flex flex-col px-3 py-2 rounded-[1rem_1rem_0_1rem] mt-4 shadow">
        <p class="text-xl">${text}</p>
        <span class="text-xs ml-auto text-sg-gray">${date.getHours()}:${date.getMinutes()}</span>
    </div>
  `;
};
