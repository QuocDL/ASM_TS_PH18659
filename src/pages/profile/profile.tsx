const Profile = () => {
  return (
    <section
      className=" bg-[#071e34] flex font-medium items-center justify-center h-full py-[10%]"
    >
      <section className=" w-[40%]  mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg">
        <div className="flex items-center justify-center">
          <span className="text-gray-400 text-sm">Profile</span>
        </div>
        <div className="mt-6 w-fit mx-auto">
          <img
            src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/378229932_708960944407464_1201804895590157296_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE7b0pp45UK0x_UGDNetAqn_K2aKfcMGhD8rZop9wwaEKWC7pD7xwHL5YU5Bz_r7Hx6iMP9Fhm6r22f9gGZlZov&_nc_ohc=8r0B6uvQEYgAX_URl8O&_nc_ht=scontent.fhan14-2.fna&oh=00_AfA-nfVltJq6eGo8PLtip5Pktd_ZnFEbKc9caFXbMMysEw&oe=655B4468"
            className="rounded-full w-28 "
            alt="profile picture"
            srcSet=""
          />
        </div>
        <div className="mt-8 text-center">
          <h2 className="text-white font-bold text-2xl tracking-wide">
            Lương Chính Quốc
          </h2>
        </div>
        <p className="text-emerald-400 font-semibold mt-2.5 text-center">21 Year Old</p>
        <p className="text-blue-400 font-semibold mt-2.5 text-center">CAO BANG</p>
        <div className="mt-3 text-white text-sm">
          <span className="text-gray-400 font-semibold">My Skills:</span>

          <div className="mt-[20px]">
            <div className="flex justify-between items-end">
              <div>
                <img className="animate-bounce w-[50px] rounded-full" src="https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png" alt="" />
                <span>HTML5 & CSS3</span>
              </div>
              <div>
                <span>70%</span>
              </div>
            </div>
            <div className="h-1 w-full bg-black mt-[5px] rounded-full">
              <div className="h-1 rounded-full w-[70%] bg-yellow-500 " />
            </div>
          </div>
          <div className="mt-[20px]">
            <div className="flex justify-between items-end">
              <div>
                <img className="animate-bounce w-[50px] rounded-full" src="https://imagedelivery.net/5MYSbk45M80qAwecrlKzdQ/7ca1b892-411f-4f4a-a5d3-82519495ae00/preview" alt="" />
                <span>JAVASCIPTS</span>
              </div>
              <div>
                <span>40%</span>
              </div>
            </div>
            <div className="h-1 w-full bg-black mt-[5px] rounded-full">
              <div className="h-1 rounded-full w-[40%] bg-yellow-500 " />
            </div>
          </div>
          <div className="mt-[20px]">
            <div className="flex justify-between items-end">
              <div>
                <img className="animate-bounce w-[50px] rounded-full" src="https://e7.pngegg.com/pngimages/631/270/png-clipart-php-php-thumbnail.png" alt="" />
                <span>PHP</span>
              </div>
              <div>
                <span>40%</span>
              </div>
            </div>
            <div className="h-1 w-full bg-black mt-[5px] rounded-full">
              <div className="h-1 rounded-full w-[40%] bg-yellow-500 " />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-[5%] gap-[15px]">
          <h3 className="text-gray-400 text-sm">My contact</h3>
          <div>
            <a href="https://www.facebook.com/quoc.luongchinh.9/" target="_blank">
              <img src="https://th.bing.com/th/id/R.1da1f4c7af14206de84ef932e1a7dd7b?rik=HcBm4zsRukQimg&riu=http%3a%2f%2flouisville.edu%2fmedicine%2fdepartments%2fbiochemistry%2four_people%2fstudent-directories%2fnetworking-icons%2ffacebook-logo%2fimage&ehk=%2bjplaE%2bB12VXvCrsjgrJtgpxWZWcntx8c7hPPmZt7kQ%3d&risl=&pid=ImgRaw&r=0"
                width={20}
                className="rounded-[5px] hover:cursor-pointer"
                alt="" />
            </a>
          </div>
          <div>
            <a href="0383144530" target="">
              <img src="https://th.bing.com/th/id/OIP._mld5w0sl3HkFAoWqbbohgHaHa?rs=1&pid=ImgDetMain"
                width={20}
                className="rounded-[10px]"
                alt="" />
            </a>
          </div>
        </div>
      </section>
    </section>

  )
}
export default Profile