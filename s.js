function computeGrade() {
    const midterm = parseFloat(document.getElementById('midtermGrade').value);
    const final = parseFloat(document.getElementById('finalGrade').value);
    const finalGrade = (midterm + final) / 2;

    let remark;
    if (finalGrade >= 100) {
        remark = 1.0;
    } else if (finalGrade >= 98) {
        remark = 1.1;
    } else if (finalGrade >= 95) {
        remark = 1.2;
    } else if (finalGrade >= 93) {
        remark = 1.3;
    } else if (finalGrade >= 90) {
        remark = 1.5;
    } else if (finalGrade >= 89) {
        remark = 1.6;
    } else if (finalGrade >= 87) {
        remark = 1.8;
    } else if (finalGrade >= 86) {
        remark = 1.9;
    } else if (finalGrade >= 85) {
        remark = 2.0;
    } else if (finalGrade >= 84) {
        remark = 2.1;
    } else if (finalGrade >= 83) {
        remark = 2.2;
    } else if (finalGrade >= 82) {
        remark = 2.3;
    } else if (finalGrade >= 81) {
        remark = 2.4;
    } else if (finalGrade >= 80) {
        remark = 2.5;
    } else if (finalGrade >= 79) {
        remark = 2.6;
    } else if (finalGrade >= 78) {
        remark = 2.7;
    } else if (finalGrade >= 77) {
        remark = 2.8;
    } else if (finalGrade >= 76) {
        remark = 2.9;
    } else if (finalGrade >= 75) {
        remark = 3.0;
    } else if (finalGrade >= 70) {
        remark = 5.0;
    } else {
        remark = 'Failed';
    }

    document.getElementById('finalComputedGrade').value = finalGrade.toFixed(2);
    document.getElementById('remarks').value = remark;
}

function resetForm() {
    document.getElementById('studentName').value = '';
    document.getElementById('studentNumber').value = '';
    document.getElementById('midtermGrade').value = '';
    document.getElementById('finalGrade').value = '';
    document.getElementById('finalComputedGrade').value = '';
    document.getElementById('remarks').value = '';
}
