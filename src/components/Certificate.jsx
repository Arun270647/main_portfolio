import React from 'react';
import { Award } from 'lucide-react';

const Certificate = ({ Title, Issuer, Date, Image, CredentialLink }) => {
	return (
		<div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden group transform transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2 flex flex-col">
			<div className="flex-1 flex items-center justify-center bg-white/10 p-4 min-h-[180px]">
				{Image && (
					<img 
						src={Image} 
						alt={Title} 
						className="w-full max-h-40 object-contain mx-auto rounded-t-3xl filter brightness-110 bg-white"
						style={{ boxShadow: 'none' }}
					/>
				)}
			</div>
			<div className="p-6 flex-1 flex flex-col justify-between">
				<div>
					<h3 className="text-2xl font-bold text-white mb-2">{Title}</h3>
					<p className="text-slate-400 text-sm mb-2">Issued by: {Issuer}</p>
					<p className="text-slate-400 text-sm mb-4">Date: {Date}</p>
				</div>
				{CredentialLink && (
					<a href={CredentialLink} target="_blank" rel="noopener noreferrer" className="text-[#a855f7] font-semibold hover:underline mt-2 block">
						View Credential <span aria-hidden>↗</span>
					</a>
				)}
			</div>
		</div>
	);
};

export default Certificate;
