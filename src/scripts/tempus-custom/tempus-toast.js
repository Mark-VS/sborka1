//import $ from "jquery";
import Toast from "./../../../node_modules/bootstrap/js/dist/toast";
function govno() {
    const toastTrigger = document.getElementById('liveToastBtn')
    const toastLiveExample = document.getElementById('liveToast')
    if (toastTrigger) {
    toastTrigger.addEventListener('click', () => {
        const toast = new Toast(toastLiveExample)
        toast.show()
    })
    }
}
export default govno;