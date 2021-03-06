var tml = new TimelineMax({paused: true});

var rt;
var tr_frames = Array.prototype.slice.call(document.querySelectorAll("#scene-transition img"));
var cur_ride = window.location.href.split("?ride=")[1];
var cur_ride_img = document.querySelector("#rocket-top");
cur_ride_img.src = "assets/images/dino_" + cur_ride + ".png";
var bgm = document.querySelector("#bgm");
var bgm2 = document.querySelector("#bgm2");
var sfx = document.querySelector("#sfx");

var transition;

var t1 = document.querySelector("#dino-g-t1-bubble");
var t2 = document.querySelector("#dino-g-t2-bubble");
var t3 = document.querySelector("#dino-g-t3-bubble");
var t4 = document.querySelector("#dino-g-t4-bubble");
var t5 = document.querySelector("#dino-g-t5-bubble");
var t6 = document.querySelector("#dino-g-t6-bubble");
var t7 = document.querySelector("#dino-g-t7-bubble");
var t8 = document.querySelector("#dino-g-t8-bubble");

if (t1) {
    t1.addEventListener("click", function () {
        var a = document.querySelector("#dino-g-t1-audio");
        var ai = document.querySelector("#dino-g-t1-audio-icon");
        if (!bgm.playing) bgm.play();
        if (!a.playing) {
            a.play();
            ai.src = "assets/images/sound_on.png";
            ai.style.animation = "none";
        } else {
            a.pause();
            ai.src = "assets/images/sound_off.png";
            ai.style.animation = "2s pulse linear infinite";
        }
    });
}

if (t2) {
    t2.addEventListener("click", function () {
        var a = document.querySelector("#dino-g-t2-audio");
        var ai = document.querySelector("#dino-g-t2-audio-icon");
        if (!bgm.playing) bgm.play();

        if (!a.playing) {
            a.play();
            ai.src = "assets/images/sound_on.png";
            ai.style.animation = "none";

        } else {
            a.pause();
            ai.src = "assets/images/sound_off.png";
            ai.style.animation = "2s pulse linear infinite";

        }
    });
}

if (t3) {
    t3.addEventListener("click", function () {
        var a = document.querySelector("#dino-g-t3-audio");
        var ai = document.querySelector("#dino-g-t3-audio-icon");
        if (!bgm.playing) bgm.play();

        if (!a.playing) {
            a.play();
            ai.src = "assets/images/sound_on.png";
            ai.style.animation = "none";

        } else {
            a.pause();
            ai.src = "assets/images/sound_off.png";
            ai.style.animation = "2s pulse linear infinite";

        }
    });
}

if (t4) {
    t4.addEventListener("click", function () {
        var a = document.querySelector("#dino-g-t4-audio");
        var ai = document.querySelector("#dino-g-t4-audio-icon");
        if (!bgm.playing) bgm.play();

        if (!a.playing) {
            a.play();
            ai.src = "assets/images/sound_on.png";
            ai.style.animation = "none";

        } else {
            a.pause();
            ai.src = "assets/images/sound_off.png";
            ai.style.animation = "2s pulse linear infinite";

        }
    });
}

if (t5) {
    t5.addEventListener("click", function () {
        var a = document.querySelector("#dino-g-t5-audio");
        var ai = document.querySelector("#dino-g-t5-audio-icon");
        if (!bgm.playing) bgm.play();

        if (!a.playing) {
            a.play();
            ai.src = "assets/images/sound_on.png";
            ai.style.animation = "none";

        } else {
            a.pause();
            ai.src = "assets/images/sound_off.png";
            ai.style.animation = "2s pulse linear infinite";

        }
    });
}

if (t6) {
    t6.addEventListener("click", function () {
        var a = document.querySelector("#dino-g-t6-audio");
        var ai = document.querySelector("#dino-g-t6-audio-icon");
        if (!bgm.playing) bgm.play();

        if (!a.playing) {
            a.play();
            ai.src = "assets/images/sound_on.png";
            ai.style.animation = "none";

        } else {
            a.pause();
            ai.src = "assets/images/sound_off.png";
            ai.style.animation = "2s pulse linear infinite";

        }
    });
}

if (t7) {
    t7.addEventListener("click", function () {
        var a = document.querySelector("#dino-g-t7-audio");
        var ai = document.querySelector("#dino-g-t7-audio-icon");
        if (!bgm.playing) bgm.play();

        if (!a.playing) {
            a.play();
            ai.src = "assets/images/sound_on.png";
            ai.style.animation = "none";

        } else {
            a.pause();
            ai.src = "assets/images/sound_off.png";
            ai.style.animation = "2s pulse linear infinite";

        }
    });
}

if (t8) {
    t8.addEventListener("click", function () {
        var a = document.querySelector("#dino-g-t8-audio");
        var ai = document.querySelector("#dino-g-t8-audio-icon");
        if (!bgm.playing) bgm.play();

        if (!a.playing) {
            a.play();
            ai.src = "assets/images/sound_on.png";
            ai.style.animation = "none";

        } else {
            a.pause();
            ai.src = "assets/images/sound_off.png";
            ai.style.animation = "2s pulse linear infinite";

        }
    });
}

var arr_tml = new TimelineMax({paused: true, yoyo: true, repeat: -1});
arr_tml.staggerTo("#arrows img", 1, {opacity: 0.3});

tml.from("#dino-g-1-dino", .3, {x: 100, opacity: 0}, "-=.1");

if (cur_ride === "moto") {
    tml.fromTo("#dino-g-t1-bubble", 1, {opacity: 0, scale: 0}, {
        opacity: 1, scale: 1, ease: Elastic.easeOut.config(1, .3), onComplete: function () {
            document.querySelector("#dino-g-t1-bubble").style.pointerEvents = "all";

        }
    });
    tml.to("#dino-g-t1-bubble", 1, {
        opacity: 0, delay: 10, onComplete: function () {
            document.querySelector("#dino-g-t1-bubble").style.pointerEvents = "none";

            document.querySelector("#arrows").style.display = "flex";
            arr_tml.play();
        }
    });
    tml.fromTo("#dino-g-t2-bubble", 1, {opacity: 0, scale: 0}, {
        opacity: 1, scale: 1, ease: Elastic.easeOut.config(1, .3), onComplete: function () {
            document.querySelector("#dino-g-t2-bubble").style.pointerEvents = "all";
        }
    });
    tml.to("#dino-g-t2-bubble", 1, {
        opacity: 0, delay: 10, onComplete: function () {
            document.querySelector("#dino-g-t2-bubble").style.pointerEvents = "none";
        }
    });
} else if (cur_ride === "car") {
    tml.fromTo("#dino-g-t3-bubble", 1, {opacity: 0, scale: 0}, {
        opacity: 1, scale: 1, ease: Elastic.easeOut.config(1, .3), onComplete: function () {
            document.querySelector("#dino-g-t3-bubble").style.pointerEvents = "all";
        }
    });
    tml.to("#dino-g-t3-bubble", 1, {
        opacity: 0, delay: 10, onComplete: function () {
            document.querySelector("#dino-g-t4-bubble").style.pointerEvents = "none";

            document.querySelector("#arrows").style.display = "flex";
            arr_tml.play();
        }
    });

    tml.fromTo("#dino-g-t4-bubble", 1, {opacity: 0, scale: 0}, {
        opacity: 1, scale: 1, ease: Elastic.easeOut.config(1, .3), onComplete: function () {
            document.querySelector("#dino-g-t4-bubble").style.pointerEvents = "all";
        }
    });
    tml.to("#dino-g-t4-bubble", 1, {
        opacity: 0, delay: 10, onComplete: function () {
            document.querySelector("#dino-g-t4-bubble").style.pointerEvents = "none";
        }
    });

    tml.fromTo("#dino-g-t5-bubble", 1, {opacity: 0, scale: 0}, {
        opacity: 1, scale: 1, ease: Elastic.easeOut.config(1, .3), onComplete: function () {
            document.querySelector("#dino-g-t5-bubble").style.pointerEvents = "all";
        }
    });
    tml.to("#dino-g-t5-bubble", 1, {
        opacity: 0, delay: 10, onComplete: function () {
            document.querySelector("#dino-g-t5-bubble").style.pointerEvents = "none";
        }
    });
} else {
    tml.fromTo("#dino-g-t6-bubble", 1, {opacity: 0, scale: 0}, {
        opacity: 1, scale: 1, ease: Elastic.easeOut.config(1, .3), onComplete: function () {
            document.querySelector("#dino-g-t6-bubble").style.pointerEvents = "all";
        }
    });
    tml.to("#dino-g-t6-bubble", 1, {
        opacity: 0, delay: 10, onComplete: function () {
            document.querySelector("#dino-g-t4-bubble").style.pointerEvents = "none";
            document.querySelector("#arrows").style.display = "flex";
            arr_tml.play();
        }
    });
    tml.fromTo("#dino-g-t7-bubble", 1, {opacity: 0, scale: 0}, {
        opacity: 1, scale: 1, ease: Elastic.easeOut.config(1, .3), onComplete: function () {
            document.querySelector("#dino-g-t7-bubble").style.pointerEvents = "all";
        }
    });
    tml.to("#dino-g-t7-bubble", 1, {
        opacity: 0, delay: 10, onComplete: function () {
            document.querySelector("#dino-g-t7-bubble").style.pointerEvents = "none";
        }
    });
    tml.fromTo("#dino-g-t8-bubble", 1, {opacity: 0, scale: 0}, {
        opacity: 1, scale: 1, ease: Elastic.easeOut.config(1, .3), onComplete: function () {
            document.querySelector("#dino-g-t8-bubble").style.pointerEvents = "all";
        }
    });
    tml.to("#dino-g-t8-bubble", 1, {
        opacity: 0, delay: 10, onComplete: function () {
            document.querySelector("#dino-g-t8-bubble").style.pointerEvents = "none";
        }
    });
}
tml.from("#dino-g-1-bubble", 1, {
    scale: 0, ease: Elastic.easeOut.config(1, 0.3), onComplete: function () {
        setTimeout(function () {
            tml.to("#dino-g-1-bubble", .5, {opacity: 0});
            tml.to("#dino-g-1-dino", .5, {x: 50});
            tml.to("#main-btn", .5, {
                opacity: 1, onComplete: function () {
                    document.querySelector("#main-btn").style.pointerEvents = "all";
                    document.querySelector("#dino-g-1-bubble").style.display = "none";
                }
            });
        }, 5000);
    }
});
tml.play();


var bgTml = new TimelineMax({paused: true});

bgTml.to("#all-planets-bg", 40, {x: -(1600 - window.innerWidth * 2.5)});

var ctml = new TimelineMax({paused: true});
ctml.addLabel("learnMore", 9.3);

ctml.to("#curtain", .5, {
    opacity: 1, onComplete: function () {
        document.querySelector("#scene-transition").style.display = "none";
        document.querySelector("#scene-all-planets").style.display = "block";
        bgTml.play();
    }
});
ctml.to("#curtain", .5, {opacity: 0});
ctml.from("#dino-g-2-rocket", 2, {x: 600, opacity: 0, ease: Power4.easeInOut});
ctml.from("#dino-g-2-bubble", 1, {
    scale: 0, ease: Elastic.easeOut.config(1, 0.3), onComplete: function () {
        sfx.pause();
    }
});
ctml.from("#lmb", .3, {
    y: 75, delay: 5, onComplete: function () {
        ctml.pause();
    }
});
ctml.to("#dino-g-2-bubble", .4, {opacity: 0});
ctml.to("#lmb", .3, {y: 50});
ctml.to("#dino-g-2-rocket", 1, {x: -700, ease: Power4.easeIn});
ctml.from("#tips", 1, {y: 700});
ctml.to("#tips", .4, {backgroundColor: "rgba(0,0,0,.5)"});

document.querySelector("#lmb").addEventListener("click", function () {
    ctml.seek("learnMore");
    ctml.play();
});

document.querySelector("#dino-g-1-bubble").addEventListener("click", function () {
    var a = document.querySelector("#dino-g-1-audio");
    var ai = document.querySelector("#dino-g-1-audio-icon");

    if (!a.playing) {
        a.play();
        ai.src = "assets/images/sound_on.png";
        ai.style.animation = "none";

    } else {
        a.pause();
        ai.src = "assets/images/sound_off.png";
        ai.style.animation = "2s pulse linear infinite";

    }
});

var dint = null;

document.querySelector("#dino-g-2-bubble").addEventListener("click", function () {
    var a = document.querySelector("#dino-g-2-audio");
    var ai = document.querySelector("#dino-g-2-audio-icon");
    var dino = document.querySelector("#rocket-top");
    if (!bgm2.playing) bgm2.play();


    if (!a.playing) {
        a.play();
        ai.src = "assets/images/sound_on.png";
        ai.style.animation = "none";

    } else {
        a.pause();
        ai.src = "assets/images/sound_off.png";
        ai.style.animation = "2s pulse linear infinite";
    }

    var drf = "";

    if (dint === null) {
        dint = setInterval(function () {
            drf = drf === "" ? "2" : "";
            document.querySelector("#rocket-top").src = "assets/images/dino_" + cur_ride + drf + ".png";
        }, 300);
    }
});

document.querySelector("#dino-g-2-audio").addEventListener("ended", function () {
    clearInterval(dint);
    document.querySelector("#rocket-top").src = "assets/images/dino_" + cur_ride + ".png";
    dint = null;

});

document.querySelector("#dino-g-2-audio").addEventListener("pause", function () {
    clearInterval(dint);
    document.querySelector("#rocket-top").src = "assets/images/dino_" + cur_ride + ".png";
    dint = null;
});

document.querySelector("#main-btn").addEventListener("click", function (ev) {
    console.log('click');
    document.querySelector("#scene-intro").style.display = "none";
    document.querySelector("#scene-transition").style.display = "block";
    bgm.pause();
    sfx.play();
    transition = setInterval(function () {
        if (tr_frames.length > 2) {
            tr_frames.pop().classList.add('hide');
        } else {
            tr_frames[1].classList.add('hide');
            tr_frames[0].classList.remove('hide');
            tr_frames.reverse();
        }
    }, 150);

    setTimeout(function () {
        document.querySelector("#curtain").style.display = "block";
        ctml.play();
        clearInterval(transition);
        transition = null;
    }, 3000)
});

(function () {
    var W = window.innerWidth;
    var H = window.innerHeight;
    var el = document.getElementById("container");
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, W / H, .1, 1000);
    camera.position.x = .1;

    var llum = new THREE.DirectionalLight();
    llum.intensity = 50;


    llum.position.x = camera.position.x;
    llum.position.y = camera.position.y;
    llum.position.z = camera.position.z;

    llum.lookAt(scene.position);

    scene.add(llum);

    var bg = new THREE.Mesh(
        new THREE.PlaneGeometry(5, 2, 32),
        new THREE.MeshBasicMaterial({
            map: new THREE.TextureLoader().load('assets/images/space1.jpg')
        })
    );

    switch (cur_ride) {
        case "car":
            var ride = new THREE.Mesh(
                new THREE.PlaneGeometry(3, 1, 32), //car
                new THREE.MeshBasicMaterial({
                    transparent: true,
                    map: new THREE.TextureLoader().load('assets/images/car-1.png')
                })
            );
            ride.position.set(0, .03, -.6); //car
            break;
        case "ship":
            var ride = new THREE.Mesh(
                new THREE.PlaneGeometry(3, 1, 32), //ship
                new THREE.MeshBasicMaterial({
                    transparent: true,
                    map: new THREE.TextureLoader().load('assets/images/ship-1.png')
                })
            );
            ride.position.set(0, 0, -.5); //ship
            break;
        case "moto":
            var ride = new THREE.Mesh(
                new THREE.PlaneGeometry(.8, .4, 32), //bike
                new THREE.MeshBasicMaterial({
                    transparent: true,
                    map: new THREE.TextureLoader().load('assets/images/moto-1.png')
                })
            );
            ride.position.set(.1, -.2, -.5); //bike
            break;
    }


    var tl = new THREE.TextureLoader();
    var texture1 = tl.load("assets/images/" + cur_ride + "-1.png");
    var texture2 = tl.load("assets/images/" + cur_ride + "-2.png");
    var txtarr = [texture1, texture2];

    function animateRide() {
        var cur_frame = 0;

        return setInterval(function () {
            cur_frame = cur_frame === 0 ? 1 : 0;
            ride.material.map = txtarr[cur_frame];
        }, 1000);
    }

    animateRide();

    bg.position.set(0, 0, -1);

    var pivot = new THREE.Object3D();
    pivot.position.set(0, 0, 0);
    pivot.add(bg);
    pivot.add(ride);

    scene.add(pivot);

    controls = new THREE.DeviceOrientationControls(camera);
    // /controls.minPolarAngle = Math.PI/2;
    // controls.maxPolarAngle = Math.PI/2;

    var renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(W, H);
    el.appendChild(renderer.domElement);


    var initialTilt;
    setTimeout(function () {
        pivot.rotation.y = camera.rotation.y;

        if (initialTilt === undefined) {
            initialTilt = controls.object.rotation.y;
        }
    }, 500);

    render();

    function render() {
        requestAnimationFrame(render);

        controls.update();
        controls.object.rotation.x = 0;
        controls.object.rotation.z = 0;

        // document.querySelector("#main-btn").style.transform = "translateX("+camera.rotation.y * 100+"px)";

        renderer.render(scene, camera);
    }

})();
