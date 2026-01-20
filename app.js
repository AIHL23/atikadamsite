const gameData = {
    ailem: {
        logo: "fotoğraflar/ailemolurmusunlogo.png",
        text: "<b>Kargo görevlisi olarak izole bir kasabaya adım atıyorsunuz.</b><br><br>Yalnızlığı tercih eden bir karakter olarak başladığınız bu yolculukta, kasaba halkıyla bağ kurmaya başlıyorsunuz. Onların sıcaklığı sizi hiç beklemediğiniz şekilde değiştiriyor.<br><br>Ancak huzurlu görünen bu kasabada bir gün sevilen bir sakin ortadan kayboluyor. Polis araştırmalar yapıyor ama kimse onu bulamıyor. Geçmiş peşinizi bırakmazken, burada gerçekten bir aile bulabilecek misiniz?",
        btn: "PLAY STORE'DAN İNDİR",
        link: "https://play.google.com/store/apps/details?id=com.atikadam.ailem",
        images: ["ailem1.png", "ailem2.png", "ailem3.png", "ailem4.png"],
        isOut: true,
        hasReadMore: false
    },
    desti: {
        logo: "fotoğraflar/destilogo.png",
        text: "<b>Düşen her şeyi parçalamaya hazır mısın?</b><br><br>Yukarıdan düşen nesnelere toplarını fırlat ve onları yok et. Hızlı tempolu, bağımlılık yapan bir aksiyon deneyimi! Nişan al, ateş et ve nesneler yere ulaşmadan önce hepsini parçala.<br><br>Öğrenmesi kolay ama ustalaşması zor! Güçlendiricileri topla ve yeni topların kilidini aç.",
        btn: "PLAY STORE'DAN İNDİR",
        link: "https://play.google.com/store/apps/details?id=com.greenmana.kor",
        images: ["destioyun1.jpg", "destioyun2.jpg", "destioyun3.jpg", "destioyun4.jpg", "destioyun5.jpg"],
        isOut: true,
        hasReadMore: false
    },
    zumrut: {
        logo: "fotoğraflar/zumrutlogo.png",
        // İlk 2 Paragraf (Görünecek kısım)
        visibleText: "<b>Zümrüt Çiçeği uğruna yapılan bir savaşta hayatta kalmaya çalışan bir çocuk.</b><br><br>Dünya tek bir devletin kontrolündedir ve diğer tüm milletler bu devletin sömürgesi olmuştur. Dünyadaki tüm petrol ve enerji kaynaklarını elinde tutan büyük Oxalis Devleti, bütün dünyanın kaderini elinde tutmaktadır.",
        // Kalan Kısım (Gizli kısım)
        hiddenText: "Sömürülen ülkelerden biri olan Alpu’da genç bir bilim adamı, uzun yıllar süren araştırmalar sonucunda bir bitkinin genetiğiyle oynayarak büyük bir keşif yaptı: bu bitkinin özsuyu, biyoyakıt olarak işlendiğinde petrol ve türevlerinden 20 kat daha verimli ve tamamen temiz bir enerji kaynağına dönüşüyordu. Yılda iki kez hasat edilebilen bu bitki, çıkardığı hoş kokulu dumanı ve parlak yeşil tonları nedeniyle halk arasında “Zümrüt Çiçeği” olarak anılmaya başlandı.<br><br>Bu haber kısa sürede tüm dünyaya yayıldı. İnsanlık, ilk kez enerji tekeline mahkûm olmadan bir gelecek hayal etmeye başlamıştı. Fakat Namrun için bu keşif, yıllardır kurduğu düzenin sonu demekti. Bir gece Namrun casusları bilim adamının evine gizlice girerek deneylerinin çoğunu yok etti, laboratuvarını ateşe verdi ve bilim adamını öldürdü. Ancak ellerine geçen tek şey, çiçeğin tek tohumu ile onun eksik genetik dizilim notları oldu.<br><br>Yangından sonra Zümrüt Çiçeği’ne dair tüm kanıtların kaybolduğu düşünüldü. Dünya çalkanmaya başladı; herkes bunun arkasında Namrun’un olduğunu biliyordu. Uzun süredir baskı altında olan devletler birleşerek bir ittifak kurdu. Namrun tüm dünyaya karşı koyamadı, kısa sürede savaşı kaybetti ve hükümeti düştü.<br><br>Fakat çiçeğin tohumu hâlâ kayıptı. Laboratuvar notlarının eksik olması yüzünden, hiçbir ülke çiçeği yeniden üretemiyordu. Artık ittifakın tek amacı o tohumu bulmak olmuştu. Bu uğurda Namrun vatandaşları acımasızca sorgulanıyor, ülkede düzen tamamen bozuluyordu. Herkes birbirini Zümrüt Çiçeği’nin sırrına sahip olmakla suçluyor, sokaklar kaosa sürükleniyordu.<br><br>Bu yıkımın ortasında, 16 yaşındaki Salvia, ailesiz ve korumasız kalmış bir çocuk olarak hayatta kalmaya çalışıyordu. Zümrüt Çiçeği’nin sırrı, sadece devletlerin değil, artık sıradan insanların da kaderini belirliyordu.",
        btn: "INSTAGRAM'DAN TAKİP ET",
        link: "https://www.instagram.com/atik_adamsi?igsh=MWZna3lkcXc4c2F6OQ==",
        images: ["zumrut1.jpg", "zumrut2.jpg", "zumrut3.jpg", "zumrut4.jpg", "zumrut5.jpg", "zumrut6.jpg"],
        isOut: false,
        hasReadMore: true
    }
};

// Açılış Sayacı
let timerVal = 3;
const timerInterval = setInterval(() => {
    timerVal--;
    const tEl = document.getElementById('timer');
    if(tEl) tEl.innerText = timerVal;
    if(timerVal <= 0) {
        clearInterval(timerInterval);
        document.getElementById('splash').style.display = 'none';
        document.getElementById('home').classList.remove('hidden');
    }
}, 1000);

// Geçiş Fonksiyonu
function pageTransition(task) {
    const wipe = document.getElementById('page-wipe');
    wipe.classList.add('active');
    setTimeout(() => {
        task();
        window.scrollTo(0,0);
        setTimeout(() => {
            wipe.classList.remove('active');
        }, 300);
    }, 500);
}

function toggleTheme() {
    const html = document.documentElement;
    html.setAttribute('data-theme', html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
}

function openGame(id) {
    const g = gameData[id];
    document.getElementById('home').classList.add('hidden');
    document.getElementById('detail').classList.remove('hidden');

    let introContent = "";
    if(g.hasReadMore) {
        introContent = `
            <div id="text-visible">${g.visibleText}</div>
            <div id="text-extra" class="hidden"><br>${g.hiddenText}</div>
            <span class="read-more-btn" id="read-btn" onclick="toggleFullText()">DEVAMINI OKU...</span>
        `;
    } else {
        introContent = g.text;
    }

    document.getElementById('detail-view').innerHTML = `
        <img src="${g.logo}" class="detail-logo">
        <div class="intro-box">${introContent}</div>
        <a href="${g.link}" target="_blank" class="pixel-button" style="display:block; background:${g.isOut?'#28a745':''}; border-color:${g.isOut?'#fff':''}">${g.btn}</a>
        <h3 class="section-title" style="font-size:8px">GALERİ</h3>
        <div class="gallery-grid">${g.images.map(img => `<img src="fotoğraflar/${img}" onclick="zoomImg('fotoğraflar/${img}')">`).join('')}</div>
    `;
}

// Devamını Oku Mantığı
function toggleFullText() {
    const extra = document.getElementById('text-extra');
    const btn = document.getElementById('read-btn');
    if(extra.classList.contains('hidden')) {
        extra.classList.remove('hidden');
        btn.innerText = "KÜÇÜLT";
    } else {
        extra.classList.add('hidden');
        btn.innerText = "DEVAMINI OKU...";
    }
}

function goBack() {
    document.getElementById('detail').classList.add('hidden');
    document.getElementById('home').classList.remove('hidden');
}

function zoomImg(src) {
    document.getElementById('lb-img').src = src;
    document.getElementById('lightbox').classList.remove('hidden');
}

function closeImg() {
    document.getElementById('lightbox').classList.add('hidden');
}
