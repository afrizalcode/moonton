export default function Show() {
    return (
        <section className="mx-auto w-screen relative watching-page font-poppins" id="stream">
            <video-js id="stream-video" className="overflow-hidden h-screen w-screen">
                <source src="https://d33kv075lir7n3.cloudfront.net/Details+Screen+Part+Final.mp4" type="video/mp4" />
                <p className="vjs-no-js text-twmdark">
                    To view this video please enable JavaScript, and consider upgrading to a
                    web browser that
                    <a href="https://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                </p>
            </video-js>

            {/* Button back to dashboard */}
            <div className="absolute top-5 left-5 z-20">
                <a href="/">
                    <img src="assets/icons/ic_arrow-left.svg" className="transition-all btn-back w-[46px]" alt="stream" />
                </a>
            </div>

            {/* Video Title */}
            <div className="absolute title-video top-7 left-1/2 -translate-x-1/2 max-w-[310px] md:max-w-[620px] text-center">
                <span className="font-medium text-2xl transition-all text-white drop-shadow-md select-none">
                    Details Screen Part Final
                </span>
            </div>
        </section>
    );
}