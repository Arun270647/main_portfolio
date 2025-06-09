import React from 'react';
import { Award } from 'lucide-react';

const Certificate = ({ Title, Issuer, Date }) => {
	return (
		<div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden group transform transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2">
			<div className="p-6">
				<div className="flex items-center justify-center w-16 h-16 rounded-full bg-purple-500/10 mb-4">
					<Award className="w-8 h-8 text-purple-400" />
				</div>
				<h3 className="text-2xl font-bold text-white mb-2">{Title}</h3>
				<p className="text-slate-400 text-sm mb-2">
					Issued by: {Issuer}
				</p>
				<p className="text-slate-400 text-sm">
					Date: {Date}
				</p>
			</div>
		</div>
	);
};

export default Certificate;
