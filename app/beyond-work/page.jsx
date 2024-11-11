import { RaisedHandIcon } from "@/components/common/Icon";
import InnerLayout from "@/components/common/InnerLayout";
import SectionTitleChip from "@/components/common/SectionTitleChip";
import Image from "next/image";

export default function BeyondWork() {
  return (
    <InnerLayout>
      <SectionTitleChip icon={<RaisedHandIcon />} text="Beyond Work" />
      <div className="mt-3 sm:mt-5 lg:mt-[30px]">
        {/* Beyond work 1 */}
        <article className="w-full">
          <h2 className="commonParaHeading">
            Lorem ipsum dolor sit amet conse ctetur Nisl placerat lorem.
          </h2>
          <div className="commonPara mt-4 lg:mt-7 xl:mt-10 flex flex-col gap-2">
            <p>
              Lorem ipsum dolor sit amet consectetur. Dictum eget gravida
              pharetra nulla augue et felis. Dictum a suspendisse convallis
              pellentesque dis non. Interdum viverra aenean molestie quis
              natoque nisi nulla nisl. Varius mattis vestibulum feugiat at
              faucibus laoreet nulla pretium neque.
            </p>
            <p>
              Lobortis morbi fermentum consectetur diam lectus facilisi aliquam
              dui. Commodo ipsum arcu consequat ut congue quis eu amet. Turpis
              id tincidunt commodo lectus risus dui. Et ut lacus arcu congue
              praesent. Sed velit eleifend ullamcorper fermentum cursus
              nascetur.
            </p>
            <p>
              Eu sit a enim quam quam accumsan purus ut. Eget sed eros dui nunc.
              A consectetur aliquam eu feugiat ullamcorper eu in. Morbi blandit
              porttitor sed.
            </p>
          </div>
          <Image
            className="mt-5 lg:mt-7 xl:mt-10 w-full"
            width={679}
            height={327}
            src="/img/bw1.png"
            alt="beyond work"
            quality={100}
          />
        </article>

        {/* Beyond work 2 */}
        <article className="w-full mt-10">
          <h2 className="commonParaHeading">
            Lorem ipsum dolor sit amet conse.
          </h2>
          <p className="mt-[10px] commonPara">
            Lorem ipsum dolor sit amet consectetur. Dictum eget gravida pharetra
            nulla augue et felis. Dictum a suspendisse convallis pellentesque
            dis non. Interdum viverra aenean molestie quis natoque nisi nulla
            nisl.
          </p>
          <div className="w-full mt-5 flex items-center justify-center gap-3 sm:gap-5">
            <Image
              src="/img/bw2.png"
              width={330}
              height={327}
              alt="beyond work"
              className="flex-1 object-cover"
            />
            <Image
              src="/img/bw3.png"
              width={330}
              height={327}
              alt="beyond work"
              className="flex-1 object-cover"
            />
          </div>
        </article>
      </div>
    </InnerLayout>
  );
}
