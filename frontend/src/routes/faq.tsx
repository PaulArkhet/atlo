import { createFileRoute } from "@tanstack/react-router";
import takeoff from "/faqtakeoff.svg";

export const Route = createFileRoute("/faq")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex-1 bg-[#242424] p-3 pt-[100px] text-[#D9D9D9] md:text-xl">
      <div className="md:p-10">
        <div className="nunitofont tracking-widest text-center text-xl pb-5 md:pb-0 text-[#D9D9D9]">
          FAQ
        </div>
      </div>
      <div className="text-center">
        <div className="text-2xl md:text-6xl font-bold">Common questions</div>
        <img src={takeoff} alt="" className="mx-auto" />
      </div>
      <div className="flex flex-col mx-auto">
        <div className="flex mx-auto">
          <div className="mr-10 pt-5">
            <div className="h-[2px] bg-white opacity-10"></div>
            <div className="py-5">Getting started</div>
            <div className="h-[2px] bg-white opacity-10"></div>
            <div className="py-5">Prototyping with Arkhet</div>
            <div className="h-[2px] bg-white opacity-10"></div>
            <div className="py-5">Integrating Arkhet into workflows</div>
            <div className="h-[2px] bg-white opacity-10"></div>
            <div className="py-5">Security and Privacy</div>
            <div className="h-[2px] bg-white opacity-10"></div>
            <div className="py-5">Get involved</div>
            <div className="h-[2px] bg-white opacity-10"></div>
          </div>
          <div className="pb-32">
            <div className="pb-3">
              <div className="text-white text-2xl pb-3 font-semibold">
                I am new to building. How can Arkhet help?
              </div>
              <div className="text-md">TBD</div>
            </div>
            <div className="py-3">
              <div className="text-white text-2xl pb-3 font-semibold">
                Who benefits from the Arkhet Platform?
              </div>
              <div className="text-md">
                Product Managers conducting experiments and running prototype
                tests will see <br /> an immediate benefit from all features.{" "}
                <br />
                Because Arkhet builds tools for builders, anyone building great
                software <br />
                experiences will gain an advantage.
              </div>
            </div>
            <div className="py-3">
              <div className="text-white text-2xl pb-3 font-semibold">
                What can I prototype?
              </div>
              <div>
                You have an idea for a software experience? Build the a
                wireframe and Arkhet will <br />
                generate the interactive prototype to your specification in
                moments. <br />
                <br />
                Assemble a wireframe from the component library with the
                intuitive drag-and-
                <br />
                drop interface. Once your idea is on the board, Arkhet produces
                an interactive <br />
                software to your specification in the form of a prototype web
                app.
              </div>
            </div>
            <div className="py-3">
              <div className="text-white text-2xl pb-3 font-semibold">
                [copy] How does Arkhet platform improve prototyping?
              </div>
              <div>TBD</div>
            </div>
            <div className="py-3">
              <div className="text-white text-2xl pb-3 font-semibold">
                How do interactive prototypes make it easier to build software?
              </div>
              <div>
                Teams that regularly produce great software are constantly
                identifying and <br /> navigating numerous risks. Interactive
                prototypes empower teams to make smart <br />
                investments earlier in the lifecycle of a product. <br />
                Arkhet generates interactive prototypes that make it possible
                for teams to test <br />
                ideas at higher fidelity and lower cost than ever before, and
                more often.
              </div>
            </div>
            <div className="py-3">
              <div className="text-white text-2xl pb-3 font-semibold">
                How do I know the prototypes are relevant to my experiment?
              </div>
              <div>
                The interactive prototype is generated directly (and solely)
                from your wireframe. <br />
                Upload your own data sets and take product experiments even
                further.
              </div>
            </div>
            <div className="py-3">
              <div className="text-white text-2xl pb-3 font-semibold">
                What if my team is not building prototypes?
              </div>
              <div>TBD</div>
            </div>
            <div className="py-3">
              <div className="text-white text-2xl pb-3 font-semibold">
                Wait… Arkhet can build interactive prototypes with AI
                Components?
              </div>
              <div>
                Yes, that is correct. Teams can now incorporate interactive AI
                components into <br /> prototypes, unlocking AI-testing
                capabilities far earlier in development. <br />
                <br />
                Teams implementing AI solutions directly or in collaboration
                with others can <br /> quickly test emerging technologies during
                development.
              </div>
            </div>
            <div className="py-3">
              <div className="text-white text-2xl pb-3 font-semibold">
                How does Arkhet ensure 100% accuracy to my design system?
              </div>
              <div>
                Upload your design system and every component will comply with
                your design <br /> requirements. Arkhet incorporates your design
                system when generating the <br />
                prototype so you don't have to write (or rewrite) a single
                prompt.
              </div>
            </div>
            <div className="py-3">
              <div className="text-white text-2xl pb-3 font-semibold">
                [copy] How does Arkhet integrate into my workflow? "Can I
                copy/paste?"
              </div>
              <div>TBD</div>
            </div>
            <div className="py-3">
              <div className="text-white text-2xl pb-3 font-semibold">
                What security is in place?
              </div>
              <div>
                The Arkhet Platform relies on the rigid security practices
                enforced by AWS <br /> Bedrock, ensuring that none of your data
                is available beyond your use. <br />
                Learn more about privacy and Arkhet.
              </div>
            </div>
            <div className="py-3">
              <div className="text-white text-2xl pb-3 font-semibold">
                How do I get involved?{" "}
              </div>
              <div>Tell us more</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
