import { Reveal } from './Reveal';
import { skillGroups } from '../data/portfolio';

/** Skill matrix: one tilted card per group, a candy bar per skill. */
export function SkillBars() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 26 }}>
      {skillGroups.map((g, gi) => (
        <Reveal key={g.title} kind="pop" delay={gi * 80} className="card" style={{ background: 'var(--cream)', padding: 26, transform: `rotate(${['-1deg', '.8deg', '-.6deg'][gi % 3]})`, boxShadow: `0 12px 0 ${g.color}` }}>
          <div className="mono" style={{ fontSize: 12, marginBottom: 6 }}>0{gi + 1} — {g.title}</div>
          <h3 className="display" style={{ margin: '0 0 18px', fontSize: 28, lineHeight: 1 }}>{g.title}</h3>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 12 }}>
            {g.skills.map(s => (
              <li key={s.name}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: 15, marginBottom: 5 }}>
                  <span>{s.name}</span>
                  <span className="mono" style={{ fontSize: 12, letterSpacing: 0 }}>{s.level}%</span>
                </div>
                <div role="meter" aria-valuenow={s.level} aria-valuemin={0} aria-valuemax={100} aria-label={`${s.name} ${s.level}%`} style={{ height: 14, borderRadius: 999, background: 'var(--ink)', padding: 3 }}>
                  <div style={{ height: '100%', width: `${s.level}%`, borderRadius: 999, background: g.color }} />
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  );
}
