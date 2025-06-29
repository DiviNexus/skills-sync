
import { useState, useEffect, useCallback } from 'react';

interface UseLazyLoadingProps {
  initialItems: any[];
  itemsPerLoad: number;
  maxScrolls?: number;
}

export const useLazyLoading = ({ 
  initialItems, 
  itemsPerLoad, 
  maxScrolls = 8 
}: UseLazyLoadingProps) => {
  const [displayedItems, setDisplayedItems] = useState(initialItems.slice(0, itemsPerLoad));
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(initialItems.length > itemsPerLoad);
  const [scrollCount, setScrollCount] = useState(0);

  const loadMore = useCallback(() => {
    if (!hasMore || loading || scrollCount >= maxScrolls) return;

    setLoading(true);
    
    setTimeout(() => {
      const currentLength = displayedItems.length;
      const nextItems = initialItems.slice(currentLength, currentLength + itemsPerLoad);
      
      setDisplayedItems(prev => [...prev, ...nextItems]);
      setScrollCount(prev => prev + 1);
      
      const newLength = currentLength + nextItems.length;
      setHasMore(newLength < initialItems.length && scrollCount + 1 < maxScrolls);
      setLoading(false);
    }, 800); // Simulate loading delay
  }, [displayedItems.length, hasMore, loading, initialItems, itemsPerLoad, scrollCount, maxScrolls]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop >= 
          document.documentElement.offsetHeight - 1000) {
        loadMore();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadMore]);

  // Reset when initialItems change
  useEffect(() => {
    setDisplayedItems(initialItems.slice(0, itemsPerLoad));
    setHasMore(initialItems.length > itemsPerLoad);
    setScrollCount(0);
    setLoading(false);
  }, [initialItems, itemsPerLoad]);

  return {
    displayedItems,
    loading,
    hasMore,
    loadMore,
    scrollCount
  };
};
