import React from "react";
import UserInfo from "~/components/profile/UserInfo";
import Order from "~/components/profile/Order";
import blueSneakers from "../../../public/blue-sneakers.jpg";
import beigeHoodie from "../../../public/beige-hoodie.jpg";
import whiteSneakers from "../../../public/white-sneakers.jpg";
import pinkPants from "../../../public/pink-pants.jpg";
import Wishlist from "~/components/profile/Wishlist";
import profilePic from "../../../public/joseph-gonzalez.jpg";
import { useSession } from "next-auth/react";
import AccessDenied from "../accessDenied";

const ProfilePage = () => {
  const { data: sessionData } = useSession();

  if (!sessionData) {
    return <AccessDenied />;
  }

  return (
    <main>
      <h1 className="mt-8 text-3xl font-bold">My Profile</h1>
      <UserInfo
        img={profilePic}
        alt="profilePic"
        // fullName="Joseph Gonzalez"
        // email="joseph.gonzalez@test.com"
        // streetName="3695 Rose Avenue"
        // postalCode={70001}
        // city="Metairie"
        // country="United States of America"
      />
      <h1 className="mt-8 text-3xl font-bold">My Orders</h1>
      <Order
        orderNr="Order No: 123456789"
        orderDate="18 Oct 2023"
        estDeliveryDate="20 Oct 2023"
        orderStatus="In Progress"
        paymentMethod="Credit Card"
        img={blueSneakers}
        alt="Blue Sneakers"
        productName="Blue Sneakers"
        color="Blue"
        qty={1}
        total={120}
      />

      <Order
        orderNr="Order No: 123456789"
        orderDate="18 Oct 2023"
        estDeliveryDate="20 Oct 2023"
        orderStatus="In Progress"
        paymentMethod="Credit Card"
        img={beigeHoodie}
        alt="Blue Sneakers"
        productName="Blue Sneakers"
        color="Blue"
        qty={1}
        total={120}
      />
      <div className="mb-32 mt-8 border-b-2 border-neutral-200"></div>
      <h1 className="text-3xl font-bold">Wishlist</h1>
      <Wishlist
        img={pinkPants}
        alt="Pink Pants"
        color="Pink"
        qty={1}
        total={70}
        productName="Pink Pants"
      />
      <Wishlist
        img={whiteSneakers}
        alt="Pink Pants"
        color="Pink"
        qty={1}
        total={70}
        productName="Pink Pants"
      />
    </main>
  );
};

export default ProfilePage;
