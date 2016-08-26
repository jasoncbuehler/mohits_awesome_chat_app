var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var UserService = (function () {
    // json located at:
    // https://api.myjson.com/bins/31o4f
    function UserService(_http) {
        var _this = this;
        this.userInputChange = new core_1.EventEmitter();
        this.loadingUsers = true;
        // TODO - pull this list from file or ultimately myjson
        _http.request('https://api.myjson.com/bins/31o4f')
            .subscribe(function (res) {
            _this.users = res.json();
            _this.selectedUser = _this.users[0];
            _this.loadingUsers = false;
        });
    }
    UserService.prototype.setSelectedUser = function (user) {
        this.selectedUser = user;
        console.log("user is selected " + user.name);
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserService);
    return UserService;
})();
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map