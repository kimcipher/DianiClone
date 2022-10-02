import React from "react";
import "./css/Marquee.css";

function Marquee() {
  const hotels = [
    "1. Baobab Beach Resort & Spa",
    "2. Diani Sea Resort",
    "3. Diani Reef Beach Resort & Spa",
    "4. Southern Palms Beach Resort",
    "6. Waterlovers Beach Resort",
    "7. Diani Sea Lodge",
    "8. Swahili Beach Resort",
    "10. Ocean Village Club",
    "11. Leopard Beach Resort & Spa",
    "12. The Sands at Nomad",
    "13. Stilts Tree Houses",
    "14. The Maji Beach Boutique Hotel",
    "15. Flamboyant Bed And Breakfast",
    "16. Jacaranda Indian Ocean Beach Resort",
    "17. Leisure Lodge Beach & Golf Resort",
    "18. Villa Kalista",
    "19. The Villa Luxury Suites Hotel",
    "20. Coral Beach Resort",
    "21. Sunset Villa Boutique Resort",
    "22. Bahari Dhow Beach Villas",
    "23. The Zubeida",
    "25. Lotfa Resort",
    "26. Galu Inn",
    "27. African Dream Cottages",
    "28. Blue Marlin Beach Hotel",
    "29. Diani Marine Divers Village",
    "30. Bidi Badu Beach Resort",
  ];
  return (
    <marquee scrollamount="10" b>
        <div className="def-main">
            {hotels.map((item, index) => (
            <p> &nbsp;&nbsp; | {item} &nbsp;&nbsp;</p>
        ))}
        </div>
    </marquee>
  );
}

export default Marquee;
