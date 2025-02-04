import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blogger/createblog")({
  component: RouteComponent,
});

function RouteComponent() {
  //use zustand to make sure randall is logged in to show this page, otherwise kick user back to login page

  return (
    <main className="flex-1 bg-[#242424] text-white p-3 pt-[100px]">
      <div className="md:p-10">
        <div className=" tracking-widest text-center text-xl pb-5 md:pb-0 text-[#D9D9D9]">
          Hello, Randall!
        </div>
      </div>
      <div className="flex flex-col mx-auto">
        <div className="mx-auto">
          <div className="text-center rounded bg-gradient-to-r from-[#6754B7] to-[#B754B3] py-2 w-[250px] m-3 z-40 cursor-pointer">
            Create new blog
          </div>
          <div className="text-center workfont text-4xl py-10">Your blogs</div>
        </div>
        <div className="grid grid-cols-5">
          <div className="border p-10 w-[250px] m-3">
            <div>Blog title</div>
            <div>picture</div>
            <div>date</div>
            <div>summary</div>
            <div className="border p-5 m-3 text-center">EDIT</div>
            <div className="border p-5 m-3 text-red-400 text-center">
              DELETE
            </div>
          </div>
          <div className="border p-10 w-[250px] m-3">
            <div>Blog title</div>
            <div>picture</div>
            <div>date</div>
            <div>summary</div>
            <div className="border p-5 m-3 text-center">EDIT</div>
            <div className="border p-5 m-3 text-red-400 text-center">
              DELETE
            </div>
          </div>
          <div className="border p-10 w-[250px] m-3">
            <div>Blog title</div>
            <div>picture</div>
            <div>date</div>
            <div>summary</div>
            <div className="border p-5 m-3 text-center">EDIT</div>
            <div className="border p-5 m-3 text-red-400 text-center">
              DELETE
            </div>
          </div>
          <div className="border p-10 w-[250px] m-3">
            <div>Blog title</div>
            <div>picture</div>
            <div>date</div>
            <div>summary</div>
            <div className="border p-5 m-3 text-center">EDIT</div>
            <div className="border p-5 m-3 text-red-400 text-center">
              DELETE
            </div>
          </div>
          <div className="border p-10 w-[250px] m-3">
            <div>Blog title</div>
            <div>picture</div>
            <div>date</div>
            <div>summary</div>
            <div className="border p-5 m-3 text-center">EDIT</div>
            <div className="border p-5 m-3 text-red-400 text-center">
              DELETE
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
