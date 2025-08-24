import React from 'react';

type WishItem = {
  id: string;
  name: string;
  status: "active" | "funded";
  imageUrl: string;
  tagline: string;
  description: string;
  donateUrl?: string;
};

interface CardProps {
  item: WishItem;
  isFlipped: boolean;
  onToggle: (id: string) => void;
  onClose: () => void;
}

export default function Card({ item, isFlipped, onToggle, onClose }: CardProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onToggle(item.id);
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  const cardId = `card-${item.id}`;
  const backId = `back-${item.id}`;

  return (
    <div className="relative h-80 [perspective:1200px] group">
      <div
        className={`relative w-full h-full transition-transform duration-300 [transform-style:preserve-3d] will-change-transform ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        }`}
        style={{
          transitionTimingFunction: 'cubic-bezier(0.2, 0.8, 0.2, 1)'
        }}
      >
        {/* Front Face */}
        <div
          id={cardId}
          className="absolute inset-0 w-full h-full rounded-xl overflow-hidden [backface-visibility:hidden] shadow-lg"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={item.imageUrl} 
              alt="" 
              className="h-full w-full object-cover"
              onError={(e) => {
                // Fallback to a placeholder if image fails to load
                (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iIzMzMzMzMyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OTk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkVxdWlwbWVudCBJbWFnZTwvdGV4dD48L3N2Zz4=';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/20 backdrop-blur-[1px]" />
          </div>

          {/* Content */}
          <div className="relative h-full flex flex-col justify-end p-6">
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
                {item.name}
              </h3>
              <p className="text-sm text-white/90 drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
                {item.tagline}
              </p>
              <button
                onClick={() => onToggle(item.id)}
                onKeyDown={handleKeyDown}
                aria-expanded={isFlipped}
                aria-controls={backId}
                className="inline-flex items-center rounded-full bg-white/15 hover:bg-white/25 text-white px-4 py-2 backdrop-blur transition-colors duration-200 text-sm font-medium"
              >
                Learn more
              </button>
            </div>
          </div>
        </div>

        {/* Back Face */}
        <div
          id={backId}
          aria-labelledby={cardId}
          className="absolute inset-0 w-full h-full rounded-xl overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-lg"
        >
          {/* Background Image (same as front) */}
          <div className="absolute inset-0">
            <img 
              src={item.imageUrl} 
              alt="" 
              className="h-full w-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iIzMzMzMzMyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OTk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkVxdWlwbWVudCBJbWFnZTwvdGV4dD48L3N2Zz4=';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/60 to-black/40 backdrop-blur-[2px]" />
          </div>

          {/* Content */}
          <div className="relative h-full flex flex-col p-6">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-bold text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
                {item.name}
              </h3>
              <button
                onClick={onClose}
                onKeyDown={handleKeyDown}
                className="text-white/70 hover:text-white transition-colors p-1"
                aria-label="Close details"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">
              <h4 className="text-sm font-semibold text-white/90 mb-3 drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
                What this is for
              </h4>
              <p className="text-sm text-white/85 leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
                {item.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/20">
              {item.status === 'active' && item.donateUrl ? (
                <a
                  href={item.donateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 text-sm font-medium transition-colors duration-200"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Donate to this project
                </a>
              ) : (
                <span className="inline-flex items-center rounded-full bg-neutral-800 text-neutral-100 px-3 py-1 text-sm font-medium">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Fully Funded
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}