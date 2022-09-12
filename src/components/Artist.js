import React from "react";

export default function Artist() {
  return (
    <div
      className="artist d-flex justify-content-center align-items-center py-5"
      id="Artist"
    >
      <div className="container d-flex justify-content-center align-items-center py-5">
        <div className="row">
          <h1 className="col-12 text-center titulo pt-5 mt-5"> ARTISTS</h1>
          <div className="col"></div>
          <div className="col-12 d-flex justify-content-center">
            <img
              src="https://i.ibb.co/NV1sYJk/17.png"
              alt="17"
              border="0"
            ></img>
          </div>

          <div className="col-12 col-lg-12 mx-auto d-flex flex-column flex-xl-row justify-lg-content-end  my-5">
            <div className="col-12 col-xl-6 d-flex  flex-column justify-content-center align-items-center">
              <img
                className="col-12"
                src="https://i.postimg.cc/fLDyFnYF/a-2.jpg"
                alt=""
                srcset=""
              />
            </div>
            <div className="col-12 col-xl-6 d-flex  flex-column justify-content-center align-items-center ">
              <h2>JAPANESE STYLE</h2>
              <h3 className="text-start">Nicholas Hatfield</h3>
              <p className="col col-sm-8 mx-auto p-3">
              The traditional Japanese style, aka Irezumi, originated during the Edo period (1603-1868) alongside ukiyo-e — woodblock prints that were hugely popular among the merchant class at the time. Because of this, the icons found in this time-tested genre of body art come from the country's age-old folklore, featuring tattooed heroes from the Suikoden and mythological creatures like dragons, kirins, and phoenixes. In short, every tattoo done in this style tells a story about Japans rich past, and beyond their dramatic smoke and wave filled appearance, this is what makes Irezumi masterpieces so powerful.
              </p>
            </div>
          </div>

          <div className="col-12 col-lg-12 mx-auto d-flex flex-column flex-xl-row-reverse justify-lg-content-end  my-5">
            <div className="col-12 col-xl-6">
              <img
                className="col-12"
                src="https://i.postimg.cc/5twjnNQL/a-1.jpg"
                alt=""
                srcset=""
              />
            </div>
            <div className="col-12 col-xl-6 d-flex  flex-column justify-content-center align-items-center">
              <h2>TRADITIONAL STYLE</h2>
              <h3 className="text-start">Jonathan Davis </h3>
              <p className="col col-sm-8 mx-auto p-3">
                The traditional style, also called old school tattoo style,
                American traditional tattoo style, classic tattoo style or
                Western traditional tattoo style, is known for its bold lines,
                bright colors, and iconic designs like roses, anchors, and
                gorgeous lady heads. With heavy hitters in the history of
                Traditional like Sailor Jerry, Don Ed Hardy, Bert Grimm, and
                Lyle Tuttle, this style of tattooing is one of the most
                well-known and beloved aesthetics within the tattoo community.
                They're gorgeous from the get go, age beautifully, and are
                filled with the history of tattooing. You can't really go wrong
                with a piece in this genre!
              </p>
            </div>
          </div>

          <div className="col-12 col-lg-12 mx-auto d-flex flex-column flex-xl-row justify-lg-content-end  my-5">
            <div className="col-12 col-lg-6 d-flex  flex-column justify-content-center align-items-center">
              <img
                className="col-12"
                src="https://i.postimg.cc/mDjkWXwr/a-3.jpg"
                alt=""
                srcset=""
              />
            </div>
            <div className="col-12 col-lg-6 d-flex  flex-column justify-content-center align-items-center">
              <h2>WATERCOLOR STYLE </h2>
              <h3 className="text-start">Candace Crawford </h3>
              <p className="col col-sm-8 mx-auto p-3">
                The watercolor style is currently in vogue. It's in extremely
                high demand by the most recent generation of tattoo enthusiasts,
                who seem to be looking for modern tattoo types to match the new
                millennium. It looks like what it sounds like, as if rendered
                with a brush dabbled in watery pastels. However, looks can be
                deceiving, while it's easy to create this aesthetic when working
                with actual watercolors on paper or canvas, doing it with ink on
                the human body is no simple feat. Still, artists make all sorts
                of whimsical and poetic pieces using this innovative approach to
                tattooing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
