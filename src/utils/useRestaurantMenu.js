import { useEffect, useState } from "react";
import { FETCH_RESTAURANTS_MENU_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [data, setData] = useState({
    info: null,
    recommended: [],
    rawCards: [],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!resId) {
      setData({ info: null, recommended: [], rawCards: [] });
      return;
    }

 const fetchMenu = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `${FETCH_RESTAURANTS_MENU_URL}${resId}`
        );

        if (!response.ok) {
          throw new Error(`Failed: ${response.status} ${response.statusText}`);
        }

        const json = await response.json();
        const cards = json?.data?.cards ?? [];

        // Extract restaurant basic info
        const infoCard = cards.find((c) => c?.card?.card?.info);
        const info = infoCard?.card?.card?.info ?? null;

        // Extract "Recommended" section
        const grouped =
          cards.find((c) => c?.groupedCard?.cardGroupMap?.REGULAR?.cards)
            ?.groupedCard?.cardGroupMap?.REGULAR?.cards ?? [];

        const recommended = grouped
          .filter((c) => c?.card?.card?.title === "Recommended")
          .flatMap((c) => c?.card?.card?.itemCards ?? [])
          .map((i) => i?.card?.info ?? null)
          .filter(Boolean);

        setData({
          info,
          recommended,
          rawCards: cards, // optional: full raw menu if needed
        });
      } catch (err) {
      
          setError(err);
          setData({ info: null, recommended: [], rawCards: [] });
        
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();

  
  }, [resId]);

  return { ...data, loading, error };
};

export default useRestaurantMenu;
