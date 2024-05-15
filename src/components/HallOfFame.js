import React from 'react';

function HallOfFame() {
  const stars = [
    { id: 1, name: '史蒂文·斯皮尔伯格 (Steven Spielberg)' },
    { id: 2, name: '昆汀·塔伦蒂诺 (Quentin Tarantino)' },
    { id: 3, name: '汤姆·汉克斯 (Tom Hanks)' },
    { id: 5, name: '丹泽尔·华盛顿 (Denzel Washington)' },
    { id: 6, name: '罗温·塞巴斯蒂安（憨豆）' },
    { id: 7, name: '莱昂纳多·迪卡普里奥(Leonardo)'},
    { id: 8, name: '金·凯瑞 (Jim Carrey)'},
    { id: 9, name: '妮可·基德曼 (Nicole Kidman)'}
  ];

  return (
    <div className="p-4">
      <div className="border-bottom">
        <h4>电影名人堂</h4>
      </div>
      <ul className="list-unstyled py-3">
        {stars.map(star => (
          <li key={star.id} className="mb-2">
            {star.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HallOfFame;
