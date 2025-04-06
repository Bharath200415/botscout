"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { auth } from "../../../firebase/firebase";
import { signOut } from "firebase/auth";
import { Button } from "./ui/button";

function Sidebar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <>
      <div className=" md:flex h-screen w-20 bg-[#261E35] p-5  fixed left-0 top-0 flex-col">
        <Link href="/">
          <div className="text-xl font-bold text-white mb-6 hover:text-[372C44] transition-colors duration-300">
        BS
          </div>
        </Link>

        

        <nav className="flex flex-col gap-4">
            <>
             <Link href="/Signup" className="hover:text-[#372C44] transition-colors duration-300">
             <Button className="text-white border-white hover:bg-[#372C44] bg-transparent">
              <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.0028 14.62C13.2361 14.62 14.24 15.6154 14.24 16.8389V19.9857C14.24 20.2486 14.4511 20.4594 14.7215 20.4655H16.674C18.2126 20.4655 19.4634 19.2317 19.4634 17.7157V8.79095C19.4562 8.26921 19.2073 7.77817 18.7801 7.45183L12.0263 2.07287C11.1198 1.35574 9.85156 1.35574 8.9419 2.07491L2.23419 7.44979C1.79063 7.78635 1.54171 8.2774 1.53659 8.80834V17.7157C1.53659 19.2317 2.78737 20.4655 4.326 20.4655H6.29693C6.57454 20.4655 6.7999 20.2455 6.7999 19.9755C6.7999 19.9161 6.80707 19.8568 6.81937 19.8005V16.8389C6.81937 15.6226 7.81712 14.6282 9.04127 14.62H12.0028ZM16.674 22H14.7031C13.5742 21.9734 12.7035 21.0885 12.7035 19.9857V16.8389C12.7035 16.4614 12.389 16.1545 12.0028 16.1545H9.04639C8.66839 16.1566 8.35595 16.4645 8.35595 16.8389V19.9755C8.35595 20.0522 8.34571 20.1259 8.32419 20.1954C8.21356 21.2082 7.34693 22 6.29693 22H4.326C1.94019 22 0 20.0778 0 17.7157V8.80118C0.0102439 7.78431 0.479415 6.85337 1.28971 6.24059L7.9841 0.874926C9.45819 -0.291301 11.5121 -0.291301 12.9831 0.87288L19.7257 6.24366C20.5175 6.84621 20.9867 7.7751 21 8.77969V17.7157C21 20.0778 19.0598 22 16.674 22Z" fill="#D8BCFF"/>
</svg>


                </Button>
              </Link>

              <Link href="/Signup" className="hover:text-[#372C44] transition-colors duration-300">
              <Button className="text-white border-white hover:bg-[#372C44] bg-transparent">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.1474 5.2035C10.5804 5.5435 10.8294 6.0505 10.8294 6.5945C10.8294 10.9795 10.9774 12.1595 11.5824 12.6085C11.9794 12.9015 12.5234 12.8985 14.3564 12.8475C15.2084 12.8225 16.2994 12.7905 17.7284 12.7905C18.2984 12.7905 18.8354 13.0345 19.1994 13.4595C19.5374 13.8545 19.6854 14.3705 19.6074 14.8785C18.9394 19.2035 15.2594 22.3445 10.8574 22.3445C5.97337 22.3445 2.00037 18.3715 2.00037 13.4885C2.00037 9.6165 4.92837 5.7445 8.52737 4.8585C9.08937 4.7215 9.69337 4.8495 10.1474 5.2035ZM8.98237 6.3035C8.95037 6.3035 8.91837 6.3075 8.88637 6.3155C5.91637 7.0465 3.50037 10.2645 3.50037 13.4885C3.50037 17.5445 6.80037 20.8445 10.8574 20.8445C14.5144 20.8445 17.5704 18.2395 18.1244 14.6495C18.1284 14.6195 18.1424 14.5325 18.0604 14.4355C17.9824 14.3445 17.8584 14.2905 17.7284 14.2905C16.3174 14.2905 15.2404 14.3225 14.3994 14.3465C12.3634 14.4075 11.5214 14.4305 10.6894 13.8135C9.49967 12.9321 9.34326 11.4504 9.33034 7.29254L9.32937 6.5945C9.32937 6.5105 9.29337 6.4405 9.22137 6.3845C9.15437 6.3315 9.06937 6.3035 8.98237 6.3035ZM20.0508 3.7338C21.8088 5.4908 22.9248 7.7998 22.8928 9.6168C22.8808 10.3258 22.3658 10.9178 21.6698 11.0228C20.3118 11.2278 18.7218 11.2898 17.3148 11.2898C16.0048 11.2898 14.8518 11.2368 14.1888 11.1988C13.3548 11.1498 12.6908 10.4848 12.6428 9.6508C12.5648 8.3288 12.3958 4.9698 12.5158 2.3718C12.5488 1.6168 13.1588 1.0158 13.9048 1.0028C16.0418 0.940803 18.2468 1.9328 20.0508 3.7338ZM14.0328 2.5018H14.0108C13.9008 5.0208 14.0638 8.2748 14.1398 9.5638C14.1438 9.6408 14.1998 9.6968 14.2758 9.7008C15.3038 9.7598 18.8458 9.9238 21.3928 9.5488C21.3988 8.1448 20.4378 6.2408 18.9908 4.7948C17.5068 3.3128 15.7508 2.5018 14.0328 2.5018Z" fill="#8D8598"/>
</svg>

                </Button>
              </Link>
            </>
                     

<Link href="/Signup" className="hover:text-[#372C44] transition-colors duration-300">
<Button className="text-white border-white hover:bg-[#372C44] bg-transparent">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.754 1.99969C14.2283 1.99969 16.2458 4.00256 16.2727 6.47358L16.4919 6.47459C19.2539 6.47459 21.4999 8.71959 21.4999 11.4796V16.9956C21.4999 19.7546 19.2539 21.9996 16.4919 21.9996H7.00788C4.24688 21.9996 1.99988 19.7546 1.99988 16.9956V11.4796C1.99988 8.71959 4.24688 6.47459 7.00788 6.47459L7.21188 6.47369L7.21822 6.27922C7.28102 5.14476 7.74825 4.10403 8.54998 3.31069C9.40798 2.45969 10.56 2.03469 11.754 1.99969ZM16.4919 7.97459L16.2729 7.97369L16.273 9.55569C16.273 9.96969 15.937 10.3057 15.523 10.3057C15.109 10.3057 14.773 9.96969 14.773 9.55569L14.7729 7.97369H8.71088L8.71098 9.55569C8.71098 9.96969 8.37498 10.3057 7.96098 10.3057C7.54698 10.3057 7.21098 9.96969 7.21098 9.55569L7.21088 7.97369L7.00788 7.97459C5.07388 7.97459 3.49988 9.54659 3.49988 11.4796V16.9956C3.49988 18.9276 5.07388 20.4996 7.00788 20.4996H16.4919C18.4259 20.4996 19.9999 18.9276 19.9999 16.9956V11.4796C19.9999 9.54659 18.4259 7.97459 16.4919 7.97459ZM11.751 3.49969C10.94 3.52769 10.18 3.80769 9.60598 4.37569C9.04031 4.93644 8.72326 5.67976 8.71131 6.4736L14.7709 6.47369L14.7678 6.34632C14.6758 4.7615 13.3584 3.49969 11.751 3.49969Z" fill="#8D8598"/>
</svg>


                </Button>
              </Link>
              <Link href="/Signup" className="hover:text-[#372C44] transition-colors duration-300">
              <Button className="text-white border-white hover:bg-[#372C44] bg-transparent">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.2671 2.00049C12.9831 2.00049 13.6791 2.29449 14.1781 2.80549C14.6761 3.31949 14.9511 4.02449 14.9301 4.73949C14.9321 4.90049 14.9851 5.08649 15.0811 5.24949C15.2401 5.51949 15.4911 5.70949 15.7891 5.78749C16.0871 5.86149 16.3991 5.82149 16.6641 5.66449C17.9441 4.93349 19.5731 5.37149 20.3041 6.64149L20.9271 7.72049C20.9431 7.74949 20.9571 7.77749 20.9691 7.80649C21.6311 9.05749 21.1891 10.6325 19.9591 11.3515C19.7801 11.4545 19.6351 11.5985 19.5351 11.7725C19.3801 12.0415 19.3371 12.3615 19.4151 12.6555C19.4951 12.9555 19.6861 13.2045 19.9551 13.3585C20.5621 13.7075 21.0151 14.2955 21.1961 14.9745C21.3771 15.6525 21.2781 16.3885 20.9251 16.9955L20.2611 18.1015C19.5301 19.3575 17.9011 19.7925 16.6341 19.0605C16.4651 18.9635 16.2701 18.9105 16.0761 18.9055H16.0701C15.7811 18.9055 15.4841 19.0285 15.2681 19.2435C15.0491 19.4625 14.9291 19.7545 14.9311 20.0645C14.9241 21.5335 13.7291 22.7215 12.2671 22.7215H11.0141C9.54508 22.7215 8.35008 21.5275 8.35008 20.0585C8.34808 19.8775 8.29608 19.6895 8.19908 19.5265C8.04208 19.2525 7.78808 19.0565 7.49508 18.9785C7.20408 18.9005 6.88508 18.9435 6.62308 19.0955C5.99508 19.4455 5.25608 19.5305 4.58008 19.3405C3.90508 19.1495 3.32208 18.6855 2.98008 18.0705L2.35508 16.9935C1.62408 15.7255 2.05908 14.1005 3.32508 13.3685C3.68408 13.1615 3.90708 12.7755 3.90708 12.3615C3.90708 11.9475 3.68408 11.5605 3.32508 11.3535C2.05808 10.6175 1.62408 8.98849 2.35408 7.72049L3.03208 6.60749C3.75308 5.35349 5.38308 4.91149 6.65408 5.64149C6.82708 5.74449 7.01508 5.79649 7.20608 5.79849C7.82908 5.79849 8.35008 5.28449 8.36008 4.65249C8.35608 3.95549 8.63108 3.28649 9.13208 2.78149C9.63508 2.27749 10.3031 2.00049 11.0141 2.00049H12.2671ZM12.2671 3.50049H11.0141C10.7041 3.50049 10.4141 3.62149 10.1951 3.83949C9.97708 4.05849 9.85808 4.34949 9.86008 4.65949C9.83908 6.12149 8.64408 7.29849 7.19708 7.29849C6.73308 7.29349 6.28608 7.16849 5.89808 6.93649C5.35308 6.62649 4.64108 6.81749 4.32208 7.37249L3.64508 8.48549C3.33508 9.02349 3.52508 9.73449 4.07708 10.0555C4.89608 10.5295 5.40708 11.4135 5.40708 12.3615C5.40708 13.3095 4.89608 14.1925 4.07508 14.6675C3.52608 14.9855 3.33608 15.6925 3.65408 16.2425L4.28508 17.3305C4.44108 17.6115 4.69608 17.8145 4.99108 17.8975C5.28508 17.9795 5.60908 17.9445 5.87908 17.7945C6.27608 17.5615 6.73808 17.4405 7.20208 17.4405C7.43108 17.4405 7.66008 17.4695 7.88408 17.5295C8.56008 17.7115 9.14708 18.1635 9.49508 18.7705C9.72108 19.1515 9.84608 19.5965 9.85008 20.0505C9.85008 20.7005 10.3721 21.2215 11.0141 21.2215H12.2671C12.9061 21.2215 13.4281 20.7035 13.4311 20.0645C13.4271 19.3585 13.7031 18.6875 14.2081 18.1825C14.7061 17.6845 15.4021 17.3855 16.0981 17.4055C16.5541 17.4165 16.9931 17.5395 17.3801 17.7595C17.9371 18.0785 18.6481 17.8885 18.9701 17.3385L19.6341 16.2315C19.7821 15.9765 19.8251 15.6565 19.7461 15.3615C19.6681 15.0665 19.4721 14.8105 19.2081 14.6595C18.5901 14.3035 18.1491 13.7295 17.9661 13.0415C17.7851 12.3665 17.8841 11.6295 18.2371 11.0225C18.4671 10.6225 18.8041 10.2855 19.2081 10.0535C19.7501 9.73649 19.9401 9.02749 19.6251 8.47549C19.6121 8.45349 19.6001 8.43049 19.5901 8.40649L19.0041 7.39049C18.6851 6.83549 17.9751 6.64449 17.4181 6.96149C16.8161 7.31749 16.1001 7.41949 15.4121 7.23849C14.7251 7.06049 14.1491 6.62549 13.7901 6.01149C13.5601 5.62749 13.4351 5.18049 13.4311 4.72549C13.4401 4.38349 13.3201 4.07649 13.1021 3.85149C12.8851 3.62749 12.5801 3.50049 12.2671 3.50049ZM11.645 8.97459C13.512 8.97459 15.031 10.4946 15.031 12.3616C15.031 14.2286 13.512 15.7466 11.645 15.7466C9.77798 15.7466 8.25898 14.2286 8.25898 12.3616C8.25898 10.4946 9.77798 8.97459 11.645 8.97459ZM11.645 10.4746C10.605 10.4746 9.75898 11.3216 9.75898 12.3616C9.75898 13.4016 10.605 14.2466 11.645 14.2466C12.685 14.2466 13.531 13.4016 13.531 12.3616C13.531 11.3216 12.685 10.4746 11.645 10.4746Z" fill="#8D8598"/>
</svg>


                </Button>
              </Link>
              {!user ? (
                        <></>

          ) : (
            <>
              <button
                onClick={handleLogout}
                className="hover:text-[#372C44] transition-colors duration-300 cursor-pointer"
              >
                Logout
              </button>
            </>
          )}
         
        </nav>
      </div>

     
    </>
  );
}

export default Sidebar;
