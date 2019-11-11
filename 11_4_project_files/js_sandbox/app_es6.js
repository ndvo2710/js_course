const AutoMaker = {
    Car (bundle) {
        return Object.create(this.bundle[bundle]);
    },

    bundle: {
        premium: {
            drive () {
                console.log('Vroom!');
            },
            getOptions () {
                return ['leather', 'wood', 'pearl'];
            }
        }
    }
};



class Membership {
    constructor(name, cost) {
        this._name = name;
        this._cost = cost;
    }
}

class SimpleMembership extends Membership {
    constructor(name) {
        super(name, '$5');
    }
}

class StandardMembership extends Membership {
    constructor(name) {
        super(name, '$15');
    }
}

class SuperMembership extends Membership {
    constructor(name) {
        super(name, '$25');
    }
}


const MemberFactory = {
    createMember (name, type) {
        let member;

        if(type === 'simple') {
            member = new SimpleMembership(name);
          } else if (type === 'standard') {
            member = new StandardMembership(name);
          } else if (type === 'super') {
            member = new SuperMembership(name);
          };
        
        member._type = type;
        member.define = function() {
            console.log(`${this._name} (${this._type}): ${this._cost}`);
        }
        return member;
    }
}

const member1 = MemberFactory.createMember('John Doe', 'simple');