import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const SingleColumn = ({ blok }) => {
  return (
    <section>
      <div className="container mx-auto" {...storyblokEditable(blok)}>
        {Array.isArray(blok.block) &&
          blok.block.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
      </div>
    </section>
  );
};

export default SingleColumn;
