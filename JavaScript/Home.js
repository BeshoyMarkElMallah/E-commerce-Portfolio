$("#logo").click(() => {
    console.log("dddd");
});

document.getElementById('prev').onclick = () => {
    const widthItem = document.querySelector('.item').offsetWidth;
    document.getElementById('formList').scrollLeft -= widthItem;
}

document.getElementById('next').onclick = () => {

    const widthItem = document.querySelector('.item').offsetWidth;

    document.getElementById('formList').scrollLeft += widthItem;
}
