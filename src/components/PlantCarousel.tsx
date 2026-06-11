"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";

export type PlantCarouselItem = {
  id: string;
  title: string;
  image: string;
};

type PlantCarouselProps = {
  items: PlantCarouselItem[];
};

// Increased slidesPerView across all breakpoints to make the card widths narrower
function getSlidesPerView(width: number) {
  if (width >= 1200) return 4.5;
  if (width >= 992) return 3.8;
  if (width >= 768) return 2.8;
  if (width >= 576) return 2.2;
  return 1.4;
}

function getGap(width: number) {
  if (width >= 1200) return 28;
  if (width >= 768) return 24;
  return 20;
}

export default function PlantCarousel({ items }: PlantCarouselProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({
    pointerId: -1,
    startX: 0,
    startIndex: 0,
    dragging: false,
  });

  const count = items.length;
  
  // Clone the items list to allow seamless infinite loops
  const clonedItems = [...items, ...items, ...items];
  
  // Start index at the second copy (the actual first item in our real list)
  const [index, setIndex] = useState(count); 
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [disableTransition, setDisableTransition] = useState(false);
  const [metrics, setMetrics] = useState({ slideStep: 280, slidesPerView: 1.4 });

  const measure = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport || count === 0) return;

    const width = viewport.clientWidth;
    const slidesPerView = getSlidesPerView(width);
    const gap = getGap(width);
    const slideWidth = (width - gap * (Math.ceil(slidesPerView) - 1)) / slidesPerView;
    const slideStep = slideWidth + gap;

    setMetrics({ slideStep, slidesPerView });
  }, [count]);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  // Handle standard looping limits resetting safely
  const handleInfiniteLoopReset = useCallback(() => {
    if (index >= count * 2) {
      setDisableTransition(true);
      setIndex(index - count);
    } else if (index < count) {
      setDisableTransition(true);
      setIndex(index + count);
    }
  }, [index, count]);

  // Turn transitions back on after repositioning indexes instantly
  useEffect(() => {
    if (disableTransition) {
      const timeout = setTimeout(() => setDisableTransition(false), 30);
      return () => clearTimeout(timeout);
    }
  }, [disableTransition]);

  const goTo = useCallback(
    (target: number) => {
      setIndex(target + count);
      setDragOffset(0);
    },
    [count]
  );

  const goNext = useCallback(() => {
    if (disableTransition) return;
    setIndex((current) => current + 1);
    setDragOffset(0);
  }, [disableTransition]);

  const goPrev = useCallback(() => {
    if (disableTransition) return;
    setIndex((current) => current - 1);
    setDragOffset(0);
  }, [disableTransition]);

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.button !== 0 || disableTransition) return;
    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startIndex: index,
      dragging: true,
    };
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragRef.current.dragging || dragRef.current.pointerId !== event.pointerId) {
      return;
    }
    setDragOffset(event.clientX - dragRef.current.startX);
  };

  const finishDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragRef.current.dragging || dragRef.current.pointerId !== event.pointerId) {
      return;
    }

    const delta = event.clientX - dragRef.current.startX;
    const threshold = Math.max(48, metrics.slideStep * 0.18);

    if (delta <= -threshold) {
      goNext();
    } else if (delta >= threshold) {
      goPrev();
    } else {
      setDragOffset(0);
    }

    dragRef.current.dragging = false;
    dragRef.current.pointerId = -1;
    setIsDragging(false);

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const translateX = -(index * metrics.slideStep) + dragOffset;
  const gap = getGap(viewportRef.current?.clientWidth ?? 768);
  const slideWidth = metrics.slideStep - gap;
  const activeRealIndex = index % count;

  return (
    <div className="plant-carousel">
      <div className="plant-carousel__frame">
        <button
          type="button"
          aria-label="Previous plant"
          className="plant-carousel__nav plant-carousel__nav--prev"
          onClick={goPrev}
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M15 6l-6 6 6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div ref={viewportRef} className="plant-carousel__viewport">
          <div
            className={[
              "plant-carousel__track",
              isDragging ? "plant-carousel__track--dragging" : "",
            ].join(" ")}
            style={{
              gap: `${gap}px`,
              transform: `translate3d(${translateX}px, 0, 0)`,
              transition: disableTransition ? "none" : undefined,
            }}
            onTransitionEnd={handleInfiniteLoopReset}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={finishDrag}
            onPointerCancel={finishDrag}
          >
            {clonedItems.map((item, idx) => (
              <article
                key={`${item.id}-clone-${idx}`}
                data-slide
                className="plant-carousel__card"
                style={{ width: `${slideWidth}px` }}
              >
                <div className="relative aspect-video w-full overflow-hidden bg-[var(--image-fallback-bg,#f3f4f6)] md:aspect-[4/3] lg:aspect-square">
  <Image
    src={item.image}
    alt={item.title}
    fill
    sizes="(max-width: 768px) 80vw, 320px"
    draggable={false}
    className="h-full w-full object-cover transition duration-500 hover:scale-105"
  />
</div>
                <p className="plant-carousel__label">{item.title}</p>
              </article>
            ))}
          </div>
        </div>

        <button
          type="button"
          aria-label="Next plant"
          className="plant-carousel__nav plant-carousel__nav--next"
          onClick={goNext}
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M9 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="plant-carousel__pagination">
        {items.map((item, bulletIndex) => (
          <button
            key={item.id}
            type="button"
            aria-label={`Go to ${item.title}`}
            aria-current={activeRealIndex === bulletIndex}
            className={[
              "plant-carousel__bullet",
              activeRealIndex === bulletIndex ? "plant-carousel__bullet--active" : "",
            ].join(" ")}
            onClick={() => goTo(bulletIndex)}
          />
        ))}
      </div>

      <p className="mt-4 text-center text-xs text-[color:var(--muted-text)] lg:hidden">
        Swipe left or right
      </p>
    </div>
  );
}