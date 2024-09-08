var _a;
// Listing Items
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    //Type Assertion
    var profilePictureInput = document.getElementById('profilePicture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    // URL 
    var usernameElement = document.getElementById("username");
    if (profilePictureInput &&
        nameElement &&
        emailElement &&
        phoneElement &&
        educationElement &&
        experienceElement &&
        skillsElement &&
        usernameElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // URl
        var username = usernameElement.value;
        var uniquepath = "resume/".concat(username.replace(/\s+/g, ' '), "_cv.html");
        // picture Elements Details
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        // Create Resume Output
        var resumeOutput = "\n        <h2>Resume</h2>\n         ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : '', "\n        <p><strong>Name:</strong> ").concat(name_1, " </p>\n        <p><strong>Email:</strong> ").concat(email, " </p>\n        <p><strong>Phone No:</strong> ").concat(phone, " </p>\n\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n        <h3>Experience</h3>\n        <p>").concat(experience, "</p>\n        <h3>SKills</h3>\n        <p>").concat(skills, "</p>\n        ");
        //URl
        var downloadLink = document.createElement('a');
        downloadLink.href = 'data:text/html;charset=utf-8' + encodeURIComponent(resumeOutput);
        downloadLink.download = uniquepath;
        downloadLink.textContent = 'Download Your New Resume';
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            //URL
            resumeOutputElement.appendChild(downloadLink);
        }
        else {
            console.error('the resume output element are missing');
        }
    }
    else {
        console.error('One or more element are missing');
    }
});
