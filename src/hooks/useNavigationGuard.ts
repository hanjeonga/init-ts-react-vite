import { useEffect } from "react";
import Swal from "sweetalert2";

// 사용법 예시
// const isFormDirty = Object.values({
//     ...form,
//     outputImages: form.outputImages.length,
//     attachFiles: form.attachFiles.length,
//     detailImg: form.detailImg.length,
//     representImg: form.representImg ? 1 : 0,
//   }).some((v) => (typeof v === "string" ? v.trim() !== "" : v !== 0));

//   useNavigationGuard(isFormDirty);

const useNavigationGuard = (isFormDirty: boolean) => {
  useEffect(() => {
    if (!isFormDirty) return;

    /** 새로고침 / 탭 닫기 방지 */
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = ""; // Chrome에서 경고창 표시
    };

    /** 뒤로가기 감지 */
    const handlePopState = async (e: PopStateEvent) => {
      e.preventDefault();

      const result = await Swal.fire({
        title: "정말 이동하시겠습니까?",
        text: "입력한 정보가 사라질 수 있습니다.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "이동하기",
        cancelButtonText: "취소",
        reverseButtons: true,
      });

      if (result.isConfirmed) {
        // ✅ 뒤로가기 허용
        window.removeEventListener("beforeunload", handleBeforeUnload);
        window.history.back();
      } else {
        // ❌ 뒤로가기 취소 → 다시 push해서 상태 복원
        window.history.pushState(null, "", window.location.href);
      }
    };

    // 현재 상태 push → popstate 감지 가능하게
    window.history.pushState(null, "", window.location.href);

    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("popstate", handlePopState);
    };
  }, [isFormDirty]);
};

export default useNavigationGuard;
