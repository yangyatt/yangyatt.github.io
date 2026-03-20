// ===== 流浪动物救助中心 - 交互脚本 =====

// 捐款金额选择
function selectAmount(amount, element) {
    // 移除所有选中状态
    document.querySelectorAll('.donate-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    // 添加当前选中状态
    element.classList.add('selected');
    
    // 显示/隐藏自定义金额输入
    const customDiv = document.getElementById('customAmount');
    if (amount === 0) {
        customDiv.style.display = 'block';
    } else {
        customDiv.style.display = 'none';
    }
}

// 志愿者类型选择
function selectType(type) {
    const select = document.getElementById('volunteerType');
    if (select) {
        select.value = type;
        // 滚动到表单
        select.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// 领养弹窗
function openAdoptModal(animalName) {
    const modal = document.getElementById('adoptModal');
    const nameDisplay = document.getElementById('adoptAnimalName');
    if (modal && nameDisplay) {
        nameDisplay.textContent = '申请领养：' + animalName;
        modal.classList.add('show');
    }
}

function closeAdoptModal() {
    const modal = document.getElementById('adoptModal');
    if (modal) {
        modal.classList.remove('show');
    }
}

function submitAdopt(event) {
    event.preventDefault();
    alert('🎉 领养申请已提交！\n\n工作人员将在3个工作日内与您联系，请保持电话畅通。');
    closeAdoptModal();
}

// 志愿者报名提交
function submitVolunteer(event) {
    event.preventDefault();
    alert('🎉 志愿者报名已提交！\n\n工作人员将在3个工作日内与您联系，请保持电话畅通。');
    event.target.reset();
}

// 救助求助表单显示/隐藏
function showRescueForm() {
    const rescueForm = document.getElementById('rescueForm');
    const driverForm = document.getElementById('driverForm');
    if (rescueForm) {
        rescueForm.style.display = 'block';
        driverForm.style.display = 'none';
        rescueForm.scrollIntoView({ behavior: 'smooth' });
    }
}

// 司机入驻表单显示/隐藏
function showDriverForm() {
    const rescueForm = document.getElementById('rescueForm');
    const driverForm = document.getElementById('driverForm');
    if (driverForm) {
        driverForm.style.display = 'block';
        rescueForm.style.display = 'none';
        driverForm.scrollIntoView({ behavior: 'smooth' });
    }
}

// 救助求助提交
function submitRescue(event) {
    event.preventDefault();
    alert('🚨 求助单已提交！\n\n附近志愿者将尽快联系您。\n如情况危急，请同时联系当地动物保护组织或110。');
    event.target.reset();
    document.getElementById('rescueForm').style.display = 'none';
}

// 司机入驻提交
function submitDriver(event) {
    event.preventDefault();
    alert('🚗 入驻申请已提交！\n\n工作人员将审核您的信息，审核通过后拉您进入志愿者司机群。');
    event.target.reset();
    document.getElementById('driverForm').style.display = 'none';
}

// 点击弹窗外部关闭
document.addEventListener('click', function(event) {
    const modal = document.getElementById('adoptModal');
    if (modal && event.target === modal) {
        closeAdoptModal();
    }
});

// 页面加载完成提示
document.addEventListener('DOMContentLoaded', function() {
    console.log('🐾 流浪动物救助中心 - 网站已加载');
});
