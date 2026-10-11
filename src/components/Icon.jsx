import {
  LuSun, LuMoon, LuMenu, LuX, LuMail, LuPhone, LuMapPin, LuArrowRight, LuArrowUp, LuChevronRight,
  LuCheck, LuAward, LuGraduationCap, LuBriefcase, LuCode, LuCloud, LuGitBranch, LuBox, LuActivity,
  LuShieldCheck, LuTerminal, LuServer, LuUsers, LuDatabase, LuLayers, LuPackage, LuSend, LuRocket,
  LuEye, LuCalendar, LuDownload, LuSearch, LuSparkles, LuLaptop,
} from 'react-icons/lu';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';

const MAP = {
  sun: LuSun, moon: LuMoon, menu: LuMenu, close: LuX, mail: LuMail, phone: LuPhone, pin: LuMapPin,
  arrow: LuArrowRight, up: LuArrowUp, chev: LuChevronRight, check: LuCheck, award: LuAward,
  grad: LuGraduationCap, briefcase: LuBriefcase, code: LuCode, cloud: LuCloud, branch: LuGitBranch,
  box: LuBox, activity: LuActivity, shield: LuShieldCheck, terminal: LuTerminal, server: LuServer,
  users: LuUsers, database: LuDatabase, layers: LuLayers, package: LuPackage, send: LuSend,
  rocket: LuRocket, eye: LuEye, cal: LuCalendar, download: LuDownload, search: LuSearch,
  sparkles: LuSparkles, linux: LuLaptop, github: FaGithub, linkedin: FaLinkedinIn,
};

export default function Icon({ name, ...props }) {
  const Cmp = MAP[name];
  return Cmp ? <Cmp aria-hidden="true" focusable="false" {...props} /> : null;
}
