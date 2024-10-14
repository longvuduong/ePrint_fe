export const ROUTERS = {
  USER: {
    LOGIN: '/login',
    HOME: '/',
    PROFILE: '/profile',
    ABOUT: {
      PATH: '/About-us',
      RECRUIT: {
        PATH: '/About-us/recruit',
        POSITION: '/About-us/recruit/position',
      },
    },
    CATEGORY: {
      PATH: '/category',
      DETAIL: '/Product-detail/:id',
      TYPE: 'Product-type/:type',
    },
    NEWS: {
      PATH: '/news',
      DETAIL: '/News-detail/:id',
    },
    DESIGN: {
      PATH: '/design',
      LOGO: '/logo',
    },
    COLLECTION: '/collection/:id',
    PROJECT: '/project',
    POLICY: '/policy',
    ORDER: '/order',
    SEARCH: '/search/:value',
  },
  ADMIN: {
    PATH: '/system/admin',
  },
};

export const getBase64 = file =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
export function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
export const renderOptions = arr => {
  let results = [];
  if (arr) {
    results = arr?.map(opt => {
      return {
        value: opt,
        label: opt,
      };
    });
  }
  results.push({
    label: 'Thêm loại sản phẩm mới',
    value: 'add_type',
  });
  return results;
};
