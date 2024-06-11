import { ReactNode } from "react";

interface ContentStructureProps {
  extra?: ReactNode;
  outerMost?: ReactNode;
  outer?: ReactNode;
  inner?: ReactNode;
  innerMost?: ReactNode;
  outerCore?: ReactNode;
  core?: ReactNode;
  id: string;
}

export default function ContentStructure({
  extra,
  outerMost,
  outer,
  inner,
  innerMost,
  outerCore,
  core,
  id,
}: ContentStructureProps) {
  return (
    <section id={id} className="reading-content">
      {extra}
      <div className="outer-most-section">
        {outerMost}
        <div className="outer-section">
          {outer}
          <div className="inner-section">
            {inner}
            <div className="inner-most-section">
              {innerMost}
              <div className="outer-core-section">
                {outerCore}
                <div className="core-section">{core}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
