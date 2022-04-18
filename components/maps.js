const Maps = () => {
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }} className="w-full">
      <a
        href="https://yandex.com.tr/harita?utm_medium=mapframe&utm_source=maps"
        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}>
        Yandex Haritalar
      </a>
      <a
        href="https://yandex.com.tr/harita/org/hasturk_firca_ve_endustirel_urunler/1123841869/?ll=29.081446%2C40.240881&z=17.25"
        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}>
        Yandex Maps: Ulaşım, navigasyon, yer arama
      </a>
      <iframe
        className="w-full"
        height={460}
        src="https://yandex.com.tr/map-widget/v1/-/1123841869/?ll=29.081446%2C40.240881&z=17.25"
        frameBorder={1}
        allowFullScreen={true}
        style={{ position: 'relative' }}></iframe>
    </div>
  );
};

export default Maps;
