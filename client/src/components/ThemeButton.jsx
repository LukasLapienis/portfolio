export const ThemeButton = () => {
   return (
      <section>
         <input type="checkbox" id="darkmode-toogle" />
         <label
            htmlFor="darkmode-toogle"
            className="after: relative block h-28 w-72 cursor-pointer rounded-3xl bg-slate-500 shadow-inner "
         ></label>
      </section>
   );
};
