class Github {
  constructor() {
    this.client_id = 'd93b8f345b123014ccd9';
    this.client_secret = '076382a3c9c45916a263c335b6f8a23b3578de44';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}